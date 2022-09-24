class VirtualScroll {
  constructor({ el, list, itemElementGenerator, itemHeight }) {
    this.$list = el // 视口元素
    this.list = list // 需要展示的列表数据
    this.itemHeight = itemHeight // 每个列表元素的高度
    this.itemElementGenerator = itemElementGenerator // 列表元素的DOM生成器
    this.mapList()
    this.initContainer()
    this.bindEvents()
  }
  initContainer() {
    this.containerHeight = this.$list.clientHeight
    this.$list.style.overflow = "hidden"
  }
  mapList() {
    this._list = this.list.map((item, i) => ({
      height: this.itemHeight,
      index: i,
      item: item,
    }))
  }
}