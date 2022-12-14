import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PreloaderService } from '@core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService) { }

  ngOnInit() {
    window.addEventListener('message', function (e) {
      console.log(e.data);
    })
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
