import { Component, Input } from '@angular/core';
import { Graph, Shape } from '@antv/x6';
const attrs = {
  body: {
    fill: 'red',
    stroke: 'red',
    strokeDasharray: '10,2',
  },
  label: {
    // text: 'Hello',
    fill: 'white',
    fontSize: 13,
  }
}
const clEl = [
  {
    x: 80,
    y: 10,
    width: 30,
    height: 30,
    shape: 'image',
    imageUrl: '../../assets/chilun.png',
  },
  {
    x: 5,
    y: 70,
    width: 100,
    height: 40,
    shape: 'image',
    imageUrl: '../../assets/chilun.png',
  },
  {
    x: 85,
    y: 80,
    width: 100,
    height: 40,
    shape: 'image',
    imageUrl: '../../assets/chilun.png',
  }
]
const ElArr = ['v4', 'v5', 'v6']
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
    this.graph = new Graph({
      interacting: function () {
        return false
      },
      selecting: true,
      container: document.getElementById('app-node'), grid: true
    } as any)

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
      const value = {
        ...clEl[key], attrs
      }
      const cl = this.graph.addNode(value)
      const view = this.graph.findView(cl)

      view?.graph.on('cell:mouseenter', (e: any) => {
        if (ElArr.indexOf(e.view.cid) != -1) {
          console.log(e, 'mouseenter')
          e.node.label = 'e.view.cid'
        }
      })
      view?.graph.on('cell:mouseleave', (e: any) => {
        if (ElArr.indexOf(e.view.cid) != -1) {
          console.log(e.node.label, 'mouseleave')
          e.node.label = ''

        }
      })

      if (view) {
        view.animateTransform('image', {
          attributeType: 'XML',
          attributeName: 'transform',
          type: 'rotate',
          from: `0 ${value.width / 2} ${value.height / 2}`,
          to: `360 ${value.width / 2} ${value.height / 2}`,
          dur: '3s',
          valuesv: `0, 10000`,
          repeatCount: 'indefinite',
        })
      }
    }
  }
}