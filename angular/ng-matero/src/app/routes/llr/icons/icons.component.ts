import { Component, OnInit } from '@angular/core';
import { DesignIconsService } from './icons.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-design-icons',
  templateUrl: './icons.component.html',
  providers: [DesignIconsService],
})
export class DesignIconsComponent implements OnInit {
  url = ''
  n_clicks = 0;
  constructor(
    private route: ActivatedRoute,
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
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params['name']);
    });
  }

}
