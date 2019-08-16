/**
 * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
 * @param {String} selector 节点选择器
 * @param {Object} ctx 页面栈或组件的实例，默认为当前页面栈实例
 */
const getCtx = (selector, ctx = getCurrentPages()[getCurrentPages().length - 1]) => {
  const componentCtx = ctx.selectComponent(selector)
  if (!componentCtx) {
    throw new Error('无法找到对应的组件，请按文档说明使用组件')
  }
  return componentCtx
}


const $loadNone = (selector = '#load-none', ctx) => getCtx(selector, ctx)
const $loadLayer = (selector = '#load-layer', ctx) => getCtx(selector, ctx)
const $loadMore = (selector = '#load-more', ctx) => getCtx(selector, ctx)
const Loading = {
  none: (options = {}) => {
    return $loadNone().show(options);
  },
  hideNone: (options = {}) => {
    return $loadNone().hide(options);
  },
  layer: (options = {}) => {
    return $loadLayer().show(options);
  },
  hideLayer: (options = {}) => {
    return $loadLayer().hide(options);
  },
  more: (options = {}) => {
    return $loadMore().show(options);
  },
  moreOver: (options = {}) => {
    return $loadMore().showOver(options);
  },
  moreNone: (options = {}) => {
    return $loadMore().showNone(options);
  },
  hideMore: (options = {}) => {
    return $loadMore().hide(options);
  }
};
export { Loading }