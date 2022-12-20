import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIframe]'
})
export class IframeDirective {

  constructor(private el: ElementRef) {


  }
  ngOnInit() {
    this.el.nativeElement.onload = () => {
      const changeFrameHeight = () => {
        console.log(this.el.nativeElement.height, '-', document.documentElement.clientHeight, this.el.nativeElement.src.split('/')[2]);
        this.el.nativeElement.height = document.documentElement.clientHeight;
        this.el.nativeElement.contentWindow.postMessage(this.el.nativeElement.height, 'http://' + this.el.nativeElement.src.split('/')[2])
      }
      window.onresize = function () {
        changeFrameHeight();
      }
    }
  }

}
