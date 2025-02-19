import { getHelMicroShared, makeCacheNode } from '../base/microShared';
import { DEFAULT_PLAT } from '../consts';

/**
 * 获取默认的平台值
 * @returns
 */
export function getPlatform() {
  // 已不再支持重置平台默认值，上层可用 helMicro.createInstace 接口来定义出自动拉取对应平台的相关接口
  return getHelMicroShared().cacheRoot.platform || DEFAULT_PLAT;
}

/**
 * @param {string} platform
 */
export function getSharedCache(platform) {
  const p = platform || getPlatform();
  const cacheRoot = getCacheRoot();
  let cacheNode = cacheRoot.caches[p];
  if (!cacheNode) {
    const platCache = makeCacheNode(platform);
    cacheRoot.caches[p] = platCache;
    cacheNode = platCache;
  }
  return cacheNode;
}

export function getCacheRoot() {
  return getHelMicroShared().cacheRoot;
}
