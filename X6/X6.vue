<template>
    <article class="page-article">
        <h1>使用场景和案例介绍</h1>
        <section class="page-article-title">
            <!-- <div id="containerX6" style="width:665px;height:474px;background: red;"></div> -->
            <mtd-tabs v-model="activeTab">
                <mtd-tab-pane label="Tab1" :value="tab.name" v-for="(tab, index) in scenarios" :key="index">
                    <template slot="label">
                        <span class="label">{{ tab.name }}</span>
                    </template>
                    <section class="info">
                        <figure>
                            <div
                                ref="containerRef"
                                class="area-center-container"
                                style="width:665px;height:474px;border: 1px dashed #d9d9d9;"
                            />
                        </figure>
                        <aside>
                            <h1>{{ tab.name }}</h1>
                            <article>{{ tab.synopsis }}</article>
                            <h1>相关任务</h1>
                            <section class="tasks">
                                <section class="relative_tasks" v-for="(box, bndex) in tab.relative_tasks" :key="bndex">
                                    <span>{{ box.name }}</span>
                                    <i class="mtdicon mtdicon-right-thick"></i>
                                </section>
                            </section>
                        </aside>
                    </section>
                </mtd-tab-pane>
            </mtd-tabs>
        </section>
    </article>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import { Graph, Shape } from '@antv/x6';
import { CustomNode, CustomLine, X6data, scenarios } from './x6js.js';

// 批量注册自定义node
// 注册之后会在 X6data 中的 shape上元素体现
// 存在shape时不会在第一次生成node 会在后面的添加节点中添加带有shape的节点
for (const key in CustomNode) {
    if (Object.prototype.hasOwnProperty.call(CustomNode, key)) {
        Shape.Rect.define(CustomNode[key]);
    }
}

@Component
export default class App extends Vue {
    scenarios: any[] = scenarios;
    activeTab = '搜索推荐场景';
    // 画布居中
    graph = null;
    mounted() {
        const graph = new Graph({
            container: document.getElementsByClassName('area-center-container')[0],
            grid: {
                size: 10, // 网格大小 10px
                visible: true // 渲染网格背景
            },
            snapline: {
                enabled: false, // 对齐线
                sharp: true
            },
            scroller: {
                enabled: false,
                pageVisible: false,
                pageBreak: false,
                pannable: true
            }
        } as any);
        this.graph = graph;
        this.graph.centerContent();
        this.graph.disablePanning(); // 禁止画布平移
        graph.fromJSON(this.getNodeData(X6data));
        //  添加自定义shape
        this.addCustomShape(X6data.nodes);
        //  添加自定义line
        this.addCustomLine(CustomLine);
    }
    // 获取node数据
    getNodeData(val: any = {}) {
        const { nodes: node } = val;
        const nodes = this.detachCustomNode(node);
        return { ...val, nodes };
    }
    // 添加自定义shape
    addCustomShape(node: any[] = []) {
        console.log(node);
        node.forEach(item => {
            console.log(this.getNodeOptions(item));
            if (item.shape) {
                this.graph.addNode({
                    shape: item.shape,
                    ...this.getNodeOptions(item)
                });
            }
        });
    }
    // 添加自定义line
    addCustomLine(line: any[] = []) {
        console.log(line);
        line.forEach(item => {
            const edge = this.graph.addEdge({
                ...item,
                vertices: this.getLineOptions(item.vertices)
            });
            if (item.customLabels) {
                item.customLabels.forEach(label => {
                    console.log(label);
                    edge.appendLabel(label);
                    edge.attr(label);
                });
            }
        });
    }
    // 分离自定义node 和 默认node
    detachCustomNode(node: any[] = []) {
        return node.map(item => {
            return item.shape ? {} : this.getNodeOptions(item);
        });
    }
    // 获取node options
    getNodeOptions(item: any = {}) {
        return {
            ...item,
            id: item.id,
            x: (item.x || 0) - 331 + 2,
            y: (item.y || 0) - 236 + 7,
            width: item.width || 80, // Number，可选，节点大小的 width 值
            height: item.height || 30, // Number，可选，节点大小的 height 值
            label: item.label
        };
    }
    // 获取node options
    getLineOptions(vertices: any[] = []) {
        return vertices.map(item => {
            console.log(item.x, item.x || 0);
            return {
                x: (item.x || 0) - 331 + 2,
                y: (item.y || 0) - 240 + 7
            };
        });
    }
}
</script>
<style lang="scss">
.page-article {
    min-width: 1200px;
    width: 1200px;
    z-index: 999;
    h1 {
        text-align: center;
        font-weight: 500;
        font-family: PingFangSC-Medium;
        font-size: 36px;
        color: rgba(0, 0, 0, 0.87);
        line-height: 50px;
        margin-top: 72px;
        margin-bottom: 40px;
    }
    .page-article-title {
        background: #ffffff;
        border-radius: 10px;
        padding: 24px 40px 18px 40px;
        margin-bottom: 90px;
        .mtd-tabs {
            .mtd-tabs-content {
                padding: 0 !important;
            }
            .info {
                margin-top: 24px;
                display: flex;
                justify-content: space-between;
                figure {
                    img {
                        width: 665px;
                        height: 474px;
                    }
                }
                aside {
                    width: 415px;
                    height: 474px;
                    overflow: hidden;
                    h1 {
                        margin: 0;
                        text-align: left;
                        font-weight: 500;
                        font-family: PingFangSC-Medium;
                        font-size: 24px;
                        color: rgba(0, 0, 0, 0.87);
                        line-height: 24px;
                    }
                    article {
                        text-align: left;
                        font-weight: 400;
                        font-family: PingFangSC-Regular;
                        font-size: 16px;
                        color: #808080;
                        text-align: justify;
                        line-height: 26px;
                        margin: 21px 0 40px 0;
                    }
                    .tasks {
                        width: 430px;
                        padding-right: 20px;
                        height: 239px;
                        overflow: auto;
                        margin-top: 22px;
                        float: left;
                    }
                    .relative_tasks {
                        margin-bottom: 22px;
                        cursor: pointer;
                        padding: 0 16px;
                        display: flex;
                        justify-content: space-between;
                        background: rgba(0, 0, 0, 0.04);
                        border-radius: 8px;
                        height: 40px;
                        span,
                        i {
                            font-weight: 400;
                            font-family: PingFangSC-Regular;
                            font-size: 16px;
                            color: rgba(0, 0, 0, 0.87);
                            line-height: 40px;
                        }
                    }
                }
            }
        }
        .label {
            font-weight: 500;
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #1c6cdc;
            line-height: 32px;
        }
    }
}
</style>
