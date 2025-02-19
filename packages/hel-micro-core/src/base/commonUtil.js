/*
|-----------------------------------------------------------------------------------
|
| 为尽量减少第三方依赖，同时也方便上层库调用 hel 内部通用的一些工具函数抽象到 commonUtil文件
|
|-----------------------------------------------------------------------------------
*/
import { getGlobalThis } from './globalRef';

export function noop(...args) {
  return args;
}

export function safeParse(jsonStr, defaultValue, errMsg) {
  // 防止传入进来的已经是 json 对象
  if (jsonStr && typeof jsonStr !== 'string') {
    return jsonStr;
  }
  try {
    const result = JSON.parse(jsonStr); // 避免 JSON.parse('null') ---> null
    return result || defaultValue;
  } catch (err) {
    if (defaultValue !== undefined) return defaultValue;
    if (errMsg) throw new Error(errMsg);
    throw err;
  }
}

export function isNull(value, nullDef = {}) {
  const { nullValues = [null, undefined, ''], emptyObjIsNull = true, emptyArrIsNull = true } = nullDef;

  const inNullValues = nullValues.includes(value);
  if (inNullValues) {
    return true;
  }

  if (Array.isArray(value)) {
    if (emptyArrIsNull) return value.length === 0;
    return false;
  }

  if (typeof value === 'object') {
    const keys = okeys(value);
    const keyLen = keys.length;
    if (emptyObjIsNull) return keyLen === 0;
    return false;
  }

  return false;
}

export function noDupPush(list, item) {
  if (!list.includes(item)) {
    list.push(item);
  }
}

export function merge2List(list1, list2) {
  const mergedList = [];
  list1.forEach((v) => noDupPush(mergedList, v));
  list2.forEach((v) => noDupPush(mergedList, v));
  return mergedList;
}

export function okeys(map) {
  return Object.keys(map);
}

export function purify(obj, isValueValid) {
  // isValidVal or isNull
  const isValidFn = isValueValid || ((value) => !isNull(value));
  const pureObj = {};
  okeys(obj).forEach((key) => {
    if (isValidFn(obj[key])) pureObj[key] = obj[key];
  });
  return pureObj;
}

export function getObjsVal(objs, key, backupVal) {
  let val = backupVal;
  for (const item of objs) {
    const mayValidVal = item[key];
    if (![null, undefined, ''].includes(mayValidVal)) {
      val = mayValidVal;
      break;
    }
  }
  return val;
}

export function nbstr(mayLineBreakStr) {
  const lines = mayLineBreakStr.split('\n');
  return lines
    .filter((line) => !!line)
    .map((line) => line.trimStart?.() || line)
    .map((line) => (line.endsWith(' ') ? line : `${line} `))
    .join('');
}

export function nbalert(mayLineBreakStr, alertInDev = true) {
  const g = getGlobalThis();
  const str = nbstr(mayLineBreakStr);
  const alert = g.alert || noop;
  if (alertInDev) {
    g.location.port && alert(str);
    return;
  }
  alert(str);
}

export function setDataset(el, key, val) {
  if (el.dataset) {
    el.dataset[key] = val;
  } else {
    el.setAttribute(`data-${key}`, val);
  }
}
