import { DIYkeyboard } from '../index';
describe('myDIY', () => {
  // 创建一个我的键盘
  const myDIY = new DIYkeyboard({})
  it("happy path ", () => {
    expect(myDIY.Axis).toBe("线性轴")
    expect(myDIY.PCB).toBe("单模")
    expect(myDIY.Locator).toBe("PC")
    expect(myDIY.Crust).toBe("ABS")
    expect(myDIY.AxisNum).toBe(104)
  })
  // 选择轴体
  it("Axis", () => {
  })
  // 更换键帽
  // 选择PCB
  // 选择定位板
  // 选择键帽数量
  // 组装
})