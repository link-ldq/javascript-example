import { Component, Input } from '@angular/core';
import { Graph, Shape } from '@antv/x6';

const clEl = [
  // {
  //   shape: 'image',
  //   x: 320,
  //   y: 120,
  //   width: 94,
  //   height: 28,
  //   imageUrl:
  //     'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg',
  // },
  {
    x: 80,
    y: 5,
    width: 10,
    height: 40,
    shape: 'image',
    imageUrl:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F91%2F35%2F3156f16774625a5.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672905867&t=bf8499b518a2913e0e07346a7977507e'
    // html: "<div id='cl1' style='font-size:30px;animation: rotate 5s linear infinite;'>⚙️<div>"
  },
  {
    x: 25,
    y: 60,
    width: 100,
    height: 40,
    shape: 'image',
    imageUrl:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F91%2F35%2F3156f16774625a5.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672905867&t=bf8499b518a2913e0e07346a7977507e'

  },
  {
    x: 115,
    y: 80,
    width: 100,
    height: 40,
    shape: 'image',
    imageUrl:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F91%2F35%2F3156f16774625a5.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672905867&t=bf8499b518a2913e0e07346a7977507e'
  }
]
@Component({
  selector: 'app-x6',
  templateUrl: './x6.component.html',
  styleUrls: ['./x6.component.css']
})
export class X6Component {
  @Input() title: string = "12";
  Arr: Array<any> = [];
  graph: Graph | undefined;
  ngOnInit() {
    this.graph = new Graph({ container: document.getElementById('app-node'), grid: true } as any)
    //创建节点
    this.graph.addNode({
      shape: "image",
      x: 0,
      y: -50,
      width: 300,
      height: 300,
      imageUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F1b%2F2m%2Fp9.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672898831&t=a5e3a202db24661d94d5fc5f161a060e"
    });
    for (let key in clEl) {
      const cl = this.graph.addNode(clEl[key])
      // const view = this.graph.findView(cl)
      // if (view) {
      //   view.animateTransform('rect', {
      //     attributeType: 'XML',
      //     attributeName: 'transform',
      //     type: 'rotate',
      //     from: '0 0 0',
      //     to: '360 0 0',
      //     dur: '1s',
      //     repeatCount: 'indefinite',
      //   })
      // }
    }
    // const rect = this.graph.addNode({
    //   x: 60,
    //   y: 60,
    //   width: 30,
    //   height: 30,
    // })

    // const view = this.graph.findView(rect)
    // if (view) {
    //   view.animateTransform('rect', {
    //     attributeType: 'XML',
    //     attributeName: 'transform',
    //     type: 'rotate',
    //     from: '0 0 0',
    //     to: '360 0 0',
    //     dur: '3s',
    //     repeatCount: 'indefinite',
    //   })
    // }
  }
}