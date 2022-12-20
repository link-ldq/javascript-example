import { Component, Input, OnInit } from '@angular/core';
import { PhmService } from './phm.service';

@Component({
  selector: 'app-design-phm',
  templateUrl: './phm.component.html',
  providers: [PhmService],
  styleUrls: ['./phm.component.css']
})
export class PhmComponent {
  condition = false;
  tabList = this.phmService.getTabList()
  constructor(
    private phmService: PhmService
  ) {
  }
}
