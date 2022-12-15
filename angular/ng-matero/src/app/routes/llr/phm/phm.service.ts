import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const TABLIST = [
  {
    url: 'http://127.0.0.1:8050',
    title: '关键性能参数'
  },
  {
    url: 'http://127.0.0.1:8050',
    title: 'test'
  },
]

@Injectable()
export class PhmService {
  constructor(
    private sanitizer: DomSanitizer
  ) { }
  getTabList() {
    return TABLIST.map(m => {
      return {
        ...m,
        // 将url设置为可信任的URL
        url: this.sanitizer.bypassSecurityTrustResourceUrl(m.url)
      }
    })
  }
}
