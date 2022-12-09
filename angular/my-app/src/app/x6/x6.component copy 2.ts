import { Component, Input } from '@angular/core';
import { Graph, Shape } from '@antv/x6';
@Component({
  selector: 'app-x6',
  templateUrl: './x6.component.html',
  styleUrls: ['./x6.component.css']
})
export class X6Component {
  @Input() title: string = "12";
  graph: Graph | undefined;
  ngOnInit() {
    this.graph = new Graph({ container: document.getElementById('app-node'), grid: true } as any)
    //创建节点
    const rect = new Shape.Rect({
      id: 'node1',
      x: 40,
      y: 40,
      width: 100,
      height: 40,
      label: 'rect',
      zIndex: 2
    })
    const circle = new Shape.Circle({
      id: 'node2',
      x: 280,
      y: 200,
      width: 60,
      height: 60,
      label: 'circle',
      zIndex: 2,
    })
    const edge = new Shape.Edge({
      id: 'edge1',
      source: rect,
      target: circle,
      zIndex: 1,
    })
    const img = new Shape.Image({
      id: 'edge1',
      source: rect,
      target: circle,
      zIndex: 1,
    })
    this.graph.addNode(rect)
    this.graph.addNode(circle)
    this.graph.addEdge(edge)
    this.graph.addEdge(img)
  }
}