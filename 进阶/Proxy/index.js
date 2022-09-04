"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIYkeyboard = void 0;
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
var DIYkeyboard = /** @class */ (function () {
    function DIYkeyboard(_a) {
        var _b = _a.Crust, Crust = _b === void 0 ? "ABS" : _b, _c = _a.Axis, Axis = _c === void 0 ? "线性轴" : _c, _d = _a.PCB, PCB = _d === void 0 ? "单模" : _d, _e = _a.Locator, Locator = _e === void 0 ? "PC" : _e, _f = _a.AxisNum, AxisNum = _f === void 0 ? 104 : _f;
        this.AxisNum = 104;
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
    DIYkeyboard.prototype.selectAxis = function (Axis) {
    };
    Object.defineProperty(DIYkeyboard.prototype, "AxisArray", {
        // 键盘组件
        get: function () { return ["ABS", "PBT", "POM"]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DIYkeyboard.prototype, "PCBArray", {
        get: function () { return ["线性轴", "段落轴", "Click轴"]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DIYkeyboard.prototype, "LocatorArray", {
        get: function () { return ["单模", "双模", "三模"]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DIYkeyboard.prototype, "CrustArray", {
        get: function () { return ["PC", "PC半钢", "FR4玻纤", "铝合⾦", "黄铜", "卡纸", "榉⽊层板"]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DIYkeyboard.prototype, "AxisNumbers", {
        get: function () { return [104, 87, 84, 82, 68, 66]; },
        enumerable: false,
        configurable: true
    });
    return DIYkeyboard;
}());
exports.DIYkeyboard = DIYkeyboard;
// 创建一个键盘
var keyboard = new DIYkeyboard({});
console.log(keyboard.AxisArray);
