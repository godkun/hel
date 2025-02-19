import { appStyleSrv, preFetchApp, preFetchLib } from 'hel-micro';
import { helConsts, helLoadStatus } from 'hel-micro-core';
import React from 'react';
import defaults from '../consts/defaults';
import type { IInnerUseRemoteCompOptions, ILocalCompProps, IRemoteCompRenderConfig } from '../types';
import ShadowView from './ShadowViewV2';

const { CSS_LIST_TO_STR, SHADOW, WARN_STYLE } = defaults;
const { LOADING, LOADED } = helLoadStatus;

export function ensureOptionsDefault(options: IInnerUseRemoteCompOptions) {
  if (options.isDefaultEnsured) {
    return options;
  }

  const ensuredOptions = { ...options };
  ensuredOptions.platform = options.platform || helConsts.DEFAULT_PLAT;
  ensuredOptions.appendCss = options.appendCss ?? !ensuredOptions.shadow;
  ensuredOptions.shadow = options.shadow ?? SHADOW;
  ensuredOptions.cssListToStr = options.cssListToStr ?? CSS_LIST_TO_STR;
  ensuredOptions.isLib = options.isLib ?? false;
  ensuredOptions.isLegacy = options.isLegacy ?? false;
  ensuredOptions.ShadowViewImpl = options.ShadowViewImpl || ShadowView;
  ensuredOptions.isDefaultEnsured = true;

  return ensuredOptions;
}

export function getErrResult(Error: any, errMsg: string) {
  const ErrorView = Error || (() => <h3 style={WARN_STYLE}>Hel MicroComp error: {errMsg}</h3>);
  return {
    RemoteModule: () => <ErrorView errMsg={errMsg} />,
    styleStr: '',
    styleUrlList: [],
    moduleReady: true,
    errMsg,
  };
}

export function getFetchingResult(SkeletonView: any) {
  return {
    RemoteModule: SkeletonView,
    styleStr: '',
    styleUrlList: [],
    moduleReady: false,
    errMsg: '',
  };
}

export function tryTriggerOnStyleFetched(config: IRemoteCompRenderConfig, mergedStyleStr: string) {
  const { controlOptions, name } = config;
  let finalStyleStr = mergedStyleStr;
  if (controlOptions.onStyleFetched) {
    const params = {
      appCssList: appStyleSrv.getStyleUrlList(name, controlOptions),
      appCssListStr: appStyleSrv.getStyleStr(name, controlOptions),
      extraCssList: controlOptions.extraCssList || [],
      extraStyleStr: controlOptions.extraStyleStr || '',
      mergedStyleStr,
    };
    finalStyleStr = controlOptions.onStyleFetched(params) || mergedStyleStr;
  }
  // !!! 兼容性逻辑，仅为了升级不报错
  finalStyleStr = controlOptions.handleStyleStr?.(finalStyleStr) || finalStyleStr;
  return finalStyleStr;
}

/**
 * 拉取远程组件样式核心逻辑
 * 标记执行中 ---> 开启骨架屏 ---> 异步拉取组件样式 ---> 拉取结束触发forceUpdate
 */
export function fetchLocalCompStyleStr(props: ILocalCompProps, ctx: any) {
  const { cssList = [], name, ...controlOptions } = props;
  const { fetchStyleStatusRef, setState, SkeletonView } = ctx;
  const fetStyleStatus = fetchStyleStatusRef.current;
  // 还在执行中，依然返回骨架屏
  if (fetStyleStatus === LOADING) {
    return getFetchingResult(SkeletonView);
  }

  fetchStyleStatusRef.current = LOADING;
  // 异步拉取样式函数
  appStyleSrv
    .fetchStyleByUrlList(cssList)
    .then((styleStr) => {
      fetchStyleStatusRef.current = LOADED;
      const finalStr = tryTriggerOnStyleFetched({ name, controlOptions }, styleStr);
      setState({ styleStr: finalStr });
    })
    .catch((err) => {
      fetchStyleStatusRef.current = LOADED;
      setState({ errMsg: err.message || 'err occurred while fetch component style' });
    });

  // 返回骨架屏
  return getFetchingResult(SkeletonView);
}

/**
 * 拉取远程组件样式核心逻辑
 * 标记执行中 ---> 开启骨架屏 ---> 异步拉取组件样式 ---> 拉取结束触发 setState
 */
export function fetchRemoteModuleStyle(config: IRemoteCompRenderConfig, ctx: any) {
  const { isLoadAppStyleExecutingRef, setState, SkeletonView } = ctx;
  // 还在执行中，依然返回骨架屏
  if (isLoadAppStyleExecutingRef.current) {
    return getFetchingResult(SkeletonView);
  }

  isLoadAppStyleExecutingRef.current = true;
  let controlOptions = config.controlOptions;
  if (!controlOptions.cssListToStr) {
    // 刻意清空 extraCssList
    controlOptions = { ...controlOptions, extraCssList: [] };
  }

  // 异步拉取样式函数
  appStyleSrv
    .fetchStyleStr(config.name, controlOptions)
    .then((styleStr) => {
      isLoadAppStyleExecutingRef.current = false;
      const shadowStyleStr = tryTriggerOnStyleFetched(config, styleStr);
      setState({ shadowStyleStr, isShadowStyleStrFetched: true });
    })
    .catch((err) => {
      isLoadAppStyleExecutingRef.current = false;
      setState({ errMsg: err.message || 'err occurred while fetch component style', isShadowStyleStrFetched: true });
    });

  // 返回骨架屏
  return getFetchingResult(SkeletonView);
}

/**
 * 拉取远程组件核心逻辑
 * 标记执行中 ---> 开启骨架屏 ---> 异步拉取组件 ---> 拉取结束触发 forceUpdate
 */
export function fetchRemoteModule(config: IRemoteCompRenderConfig, ctx: any) {
  const { name, controlOptions } = config;
  const { isLoadAppDataExecutingRef, setState, SkeletonView, forceUpdate } = ctx;
  // 还在执行中，依然返回骨架屏
  if (isLoadAppDataExecutingRef.current) {
    return getFetchingResult(SkeletonView);
  }

  isLoadAppDataExecutingRef.current = true;
  // 声明拉取函数
  const doPreFetch = async () => {
    if (controlOptions.isLib) return preFetchLib(name, controlOptions);
    return preFetchApp(name, controlOptions);
  };

  // 开始执行异步获取组件操作
  doPreFetch()
    .then((emitAppOrLib) => {
      if (!emitAppOrLib) {
        return setState({ errMsg: 'no component fetched' });
      }
      isLoadAppDataExecutingRef.current = false;
      forceUpdate();
    })
    .catch((err) => {
      isLoadAppDataExecutingRef.current = false;
      setState({ errMsg: err.message || 'err occurred while fetch component' });
    });

  // 返回骨架屏
  return getFetchingResult(SkeletonView);
}
