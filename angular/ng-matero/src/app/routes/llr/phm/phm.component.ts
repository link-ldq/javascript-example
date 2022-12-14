import { Component, OnInit } from '@angular/core';
import { PhmService } from './phm.service';

@Component({
  selector: 'app-design-phm',
  templateUrl: './phm.component.html',
  providers: [PhmService],
})
export class PhmComponent {
  url = ''
  n_clicks = 0;
  constructor(
  ) {
    if (window.addEventListener) {
      window.addEventListener("message", this.handleMessage.bind(this), false);
    }
    else {
      (<any>window).attachEvent("onmessage", this.handleMessage.bind(this));
    }
  }

  handleMessage(event: Event) {
    const message = event as MessageEvent;
    console.log(message.data)
    if (message.data.url !== undefined && message.data.n_clicks !== this.n_clicks) {
      this.n_clicks = message.data.n_clicks
      window.open(message.data.url)
    }

  }

}
