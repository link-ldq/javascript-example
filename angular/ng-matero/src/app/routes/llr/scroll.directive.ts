import {
  ApplicationRef, // 全局性调用检测
  ComponentFactoryResolver, // 创建组件对象
  ComponentRef, // 组件实例的关联和指引，指向 ComponentFactory 创建的元素
  Directive, ElementRef,
  EmbeddedViewRef, // EmbeddedViewRef 继承于 ViewRef，用于表示模板元素中定义的 UI 元素。
  HostListener, // DOM 事件监听
  Injector, // 依赖注入
  Input
} from '@angular/core';

import { DesignColorsComponent } from './colors/colors.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input("appTooltip") appTooltip!: string;

  private componentRef!: ComponentRef<DesignColorsComponent>;

  // 获取目标元素的相关位置，比如 left, right, top, bottom
  get elementPosition() {
    return this.elementRef.nativeElement.getBoundingClientRect();
  }

  constructor(
    protected elementRef: ElementRef,
    protected appRef: ApplicationRef,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected injector: Injector
  ) { }

  // 创建 tooltip
  protected createTooltip() {
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(DesignColorsComponent) // 绑定 tooltip 组件
      .create(this.injector);

    this.componentRef.instance.data = { // 绑定 data 数据
      content: this.appTooltip,
      element: this.elementRef.nativeElement,
      elementPosition: this.elementPosition
    }

    this.appRef.attachView(this.componentRef.hostView); // 添加视图
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  // 删除 tooltip
  protected destroyTooltip() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView); // 移除视图
      this.componentRef.destroy();
    }
  }

  // 监听鼠标移入
  @HostListener('mouseover')
  OnEnter() {
    this.createTooltip();
  }

  // 监听鼠标移出
  @HostListener('mouseout')
  OnOut() {
    this.destroyTooltip();
  }

}