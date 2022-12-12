import { Component, OnInit } from '@angular/core';

import { DesignColorsService } from './colors.service';

interface LIST {
  id: number,
  name: string,
  time: string
}
const list: LIST[] = new Array(100).fill(1).map((m, i) => {
  return {
    id: i,
    name: 'ldq' + i,
    time: new Date(new Date().getTime() + i * 1000).toLocaleString()
  }
})
@Component({
  selector: 'app-design-colors',
  // directives: [a],
  templateUrl: './colors.component.html',
  providers: [DesignColorsService],
})
export class DesignColorsComponent implements OnInit {
  public isShow = false;
  lists: LIST[] = list;
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => this.isShow = true, 3000)
  }

}
