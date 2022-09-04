// 键盘设计
/**
 * 机械键盘类
 * 1. 键帽
 *  ABS PBT POM  
 * 2. 轴体
 *  线性轴 段落轴 Click轴
 * 3. pcb板
 *  单模 双模 三模
 * 4. 定位板
 *  PC PC半钢 FR4玻纤 铝合⾦ 黄铜 卡纸 榉⽊层板
 */
export class DIYkeyboard {
  // 键盘属性
  Axis: String;
  PCB: String;
  Locator: String;
  Crust: String;
  AxisNum: number = 104

  constructor({
    Crust = "ABS",
    Axis = "线性轴",
    PCB = "单模",
    Locator = "PC",
    AxisNum = 104
  }) {
    // 键帽
    this.Crust = Crust;
    // 轴体
    this.Axis = Axis;
    // pcb板
    this.PCB = PCB;
    // 定位板
    this.Locator = Locator;
    // 键帽数量
    this.AxisNum = AxisNum;
  }
  // 操作区
  // 选择轴体
  selectAxis(Axis: String) {
    
  }
  // 键盘组件
  get AxisArray() { return ["ABS", "PBT", "POM"] }
  get PCBArray() { return ["线性轴", "段落轴", "Click轴"] }
  get LocatorArray() { return ["单模", "双模", "三模"] }
  get CrustArray() { return ["PC", "PC半钢", "FR4玻纤", "铝合⾦", "黄铜", "卡纸", "榉⽊层板"] }
  get AxisNumbers() { return [104, 87, 84, 82, 68, 66] }
}
// 创建一个键盘
const keyboard = new DIYkeyboard({})
console.log(keyboard.AxisArray);
