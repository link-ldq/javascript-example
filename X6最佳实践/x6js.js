// 标题node 带image，user
const userNode = {
    shape: 'userNode',
    width: 80, // 默认宽度
    height: 30, // 默认高度
    attrs: {
        body: {
            rx: 4, // 圆角矩形
            ry: 4,
            fill: '#edf4fd',
            stroke: '#edf4fd'
        },
        text: {
            fill: '#015ade',
            fontSize: 18,
            refX: 30, // x 轴偏移，类似 css 中的 margin-left
            textAnchor: 'center' // 左对齐,
        },
        image: {
            'xlink:href': 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
            width: 18,
            height: 18,
            x: 10,
            y: 6
        }
    },
    markup: [
        {
            tagName: 'rect',
            selector: 'body'
        },
        {
            tagName: 'image',
            selector: 'image'
        },
        {
            tagName: 'text',
            selector: 'title'
        },
        {
            tagName: 'text',
            selector: 'text'
        }
    ]
};
// 标题node query 地点 游玩
const QueryNode = {
    ...userNode,
    shape: 'QueryNode',
    attrs: {
        body: {
            rx: 4, // 圆角矩形
            ry: 4,
            fill: '#edf4fd00',
            stroke: '#edf4fd00'
        },
        text: {
            fill: '#015ade',
            fontSize: 18,
            refX: 30, // x 轴偏移，类似 css 中的 margin-left
            textAnchor: 'center' // 左对齐,
        },
        image: {
            'xlink:href': 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
            width: 18,
            height: 18,
            x: 10,
            y: 6
        }
    }
};
// 圆角矩形，关键词node
const PlayNode = {
    ...userNode,
    shape: 'PlayNode',
    attrs: {
        body: {
            rx: 4, // 圆角矩形
            ry: 4,
            fill: '#1b6bdc',
            stroke: '#1b6bdc'
        },
        text: {
            fill: '#fff',
            fontSize: 18,
            // refX: 30, // x 轴偏移，类似 css 中的 margin-left
            textAnchor: 'middle' // 左对齐,
        },
        image: {
            width: 18,
            height: 18,
            x: 10,
            y: 6
        }
    }
};
// 自定义大node 当作背景使用
const BcgNode = {
    ...userNode,
    shape: 'BcgNode',
    attrs: {
        body: {
            rx: 4, // 圆角矩形
            ry: 4,
            fill: '#edf4fd',
            stroke: '#edf4fd'
        },
        text: {
            fill: '#fff',
            fontSize: 18,
            // refX: 30, // x 轴偏移，类似 css 中的 margin-left
            textAnchor: 'middle' // 左对齐,
        }
    }
};
// 边上的文字node
const actionNode = {
    shape: 'actionNode',
    width: 80, // 默认宽度
    height: 30, // 默认高度
    attrs: {
        body: {
            rx: 4, // 圆角矩形
            ry: 4,
            fill: '#fafbfc00',
            stroke: '#fafbfc00'
        },
        text: {
            // fill: '#015ade',
            fontSize: 12,
            // refX: 30, // x 轴偏移，类似 css 中的 margin-left
            textAnchor: 'middle' // 左对齐
        }
    }
};
// 原始节点配置
// 带有shape属性证明是 自定义node，第一次不会处理shape node
// 等到添加自定义节点时会去遍历添加 shape的节点
const X6data = {
    // 节点
    nodes: [
        // {
        //     shape: 'actionNode',
        //     id: '点赞/收藏',
        //     x: 90,
        //     y: 30,
        //     label: '点赞/收藏'
        // },
        {
            shape: 'BcgNode',
            id: 'BcgNode1',
            x: 130,
            y: 110,
            width: 400,
            height: 90,
            label: ''
        },
        {
            shape: 'BcgNode',
            id: 'BcgNode20',
            x: 130,
            y: 230,
            width: 400,
            height: 90,
            label: ''
        },
        {
            shape: 'BcgNode',
            id: 'BcgNode21',
            x: 130,
            y: 230,
            width: 400,
            height: 60,
            label: ''
        },
        {
            shape: 'BcgNode',
            id: 'BcgNode22',
            x: 130,
            y: 260,
            width: 400,
            height: 60,
            label: ''
        },
        {
            shape: 'BcgNode',
            id: 'BcgNode23',
            x: 130,
            y: 290,
            width: 400,
            height: 30,
            label: ''
        },
        {
            shape: 'BcgNode',
            id: 'BcgNode31',
            x: 130,
            y: 350,
            width: 400,
            height: 60,
            label: ''
        },
        {
            shape: 'BcgNode',
            id: 'BcgNode32',
            x: 130,
            y: 380,
            width: 400,
            height: 60,
            label: ''
        },
        {
            shape: 'BcgNode',
            id: 'BcgNode33',
            x: 130,
            y: 380,
            width: 400,
            height: 60,
            label: ''
        },
        {
            shape: 'BcgNode',
            id: 'BcgNode34',
            x: 130,
            y: 370,
            width: 400,
            height: 45,
            label: ''
        },
        {
            shape: 'userNode',
            id: 'user',
            x: 290,
            y: 30,
            label: 'User'
        },
        // {
        //     shape: 'actionNode',
        //     id: '点击/购买',
        //     x: 490,
        //     y: 30,
        //     label: '点击/购买'
        // },
        // {
        //     shape: 'actionNode',
        //     id: '搜索',
        //     x: 290,
        //     y: 70,
        //     label: '搜索'
        // },
        // {
        //     shape: 'actionNode',
        //     id: '召回1',
        //     x: 100,
        //     y: 200,
        //     label: '召回'
        // },
        // {
        //     shape: 'actionNode',
        //     id: '召回2',
        //     x: 500,
        //     y: 200,
        //     label: '召回'
        // },
        {
            shape: 'QueryNode',
            id: 'Query',
            x: 290,
            y: 110,
            label: 'Query'
        },
        {
            shape: 'PlayNode',
            id: '赏花',
            x: 190,
            y: 150,
            label: '赏花'
        },
        {
            shape: 'PlayNode',
            id: '划船',
            x: 290,
            y: 150,
            label: '划船'
        },
        {
            shape: 'PlayNode',
            id: '慢跑',
            x: 390,
            y: 150,
            label: '慢跑'
        },
        {
            shape: 'QueryNode',
            id: '地点',
            x: 290,
            y: 230,
            label: '地点'
        },
        {
            shape: 'PlayNode',
            id: '北海公园',
            width: '110',
            x: 145,
            y: 270,
            label: '北海公园',
            ports: {
                groups: {
                    // 输入链接桩群组定义
                    in: {
                        position: 'top',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#fff',
                                strokeWidth: 1,
                                fill: '#1b6bdc'
                            }
                        }
                    }
                },
                items: [
                    {
                        id: 'port1',
                        group: 'in',
                        args: {
                            dx: -5
                        }
                    },
                    {
                        id: 'port2',
                        group: 'in',
                        args: {
                            dx: 8
                        }
                    }
                ]
            }
        },
        {
            shape: 'PlayNode',
            id: '颐和园',
            width: '110',
            x: 275,
            y: 270,
            label: '颐和园',
            ports: {
                groups: {
                    // 输入链接桩群组定义
                    in: {
                        position: 'top',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#fff',
                                strokeWidth: 1,
                                fill: '#1b6bdc'
                            }
                        }
                    }
                },
                items: [
                    {
                        id: 'port1',
                        group: 'in',
                        args: {
                            dx: 35
                        }
                    }
                ]
            }
        },
        {
            shape: 'PlayNode',
            id: '奥森公园',
            width: '110',
            x: 405,
            y: 270,
            label: '奥森公园',
            ports: {
                groups: {
                    // 输入链接桩群组定义
                    in: {
                        position: 'top',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#fff',
                                strokeWidth: 1,
                                fill: '#1b6bdc'
                            }
                        }
                    }
                },
                items: [
                    {
                        id: 'port1',
                        group: 'in',
                        args: {
                            dx: 30
                        }
                    }
                ]
            }
        },
        {
            shape: 'QueryNode',
            id: '游玩',
            x: 290,
            y: 350,
            label: '游玩'
        },
        {
            shape: 'PlayNode',
            id: '1小时旅拍',
            width: '110',
            x: 145,
            y: 390,
            label: '1小时旅拍',
            ports: {
                groups: {
                    // 输入链接桩群组定义
                    in: {
                        position: 'top',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#fff',
                                strokeWidth: 1,
                                fill: '#1b6bdc'
                            }
                        }
                    }
                },
                items: [
                    {
                        id: 'port1',
                        group: 'in'
                    }
                ]
            }
        },
        {
            shape: 'PlayNode',
            id: '双人皮划艇',
            width: '110',
            x: 275,
            y: 390,
            label: '双人皮划艇',
            ports: {
                groups: {
                    // 输入链接桩群组定义
                    in: {
                        position: 'top',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#fff',
                                strokeWidth: 1,
                                fill: '#1b6bdc'
                            }
                        }
                    }
                },
                items: [
                    {
                        id: 'port1',
                        group: 'in'
                    }
                ]
            }
        },
        {
            shape: 'PlayNode',
            id: '1日跟团游',
            width: '110',
            x: 405,
            y: 390,
            label: '1日跟团游',
            ports: {
                groups: {
                    // 输入链接桩群组定义
                    in: {
                        position: 'top',
                        attrs: {
                            circle: {
                                r: 4,
                                magnet: true,
                                stroke: '#fff',
                                strokeWidth: 1,
                                fill: '#1b6bdc'
                            }
                        }
                    }
                },
                items: [
                    {
                        id: 'port1',
                        group: 'in',
                        args: {
                            dx: 0
                        }
                    }
                ]
            }
        }
    ],
    // 边
    edges: [
        // {
        //     source: '点赞/收藏', // String，必须，起始节点 id
        //     target: 'user' // String，必须，目标节点 id
        // },
        // {
        //     source: 'user', // String，必须，起始节点 id
        //     target: '点击/购买' // String，必须，目标节点 id
        // },
    ]
};
// 自定义边 链接桩/边 设置customLabels 会自定义 箭头和边的样式
const CustomLine = [
    {
        source: 'user',
        target: 'BcgNode1',
        // 默认line的label
        labels: [
            {
                attrs: { label: { text: '搜索' } }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3' // 指定 path 元素的填充色
            }
        },
        vertices: []
    },
    {
        source: 'BcgNode1',
        target: 'BcgNode21',
        // 默认line的label
        labels: [
            {
                attrs: { label: { text: '召回' } }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3' // 指定 path 元素的填充色
            }
        },
        vertices: [
            { x: 100, y: 160 },
            { x: 100, y: 265 }
        ]
    },
    {
        source: 'user',
        target: 'BcgNode22',
        // 默认line的label
        // labels: [
        //     {
        //         attrs: { label: { text: '点赞/收藏' } }
        //     }
        // ],
        // 自定义line的label
        customLabels: [
            {
                attrs: {
                    text: {
                        text: '点赞/收藏'
                    }
                },
                position: {
                    distance: 150
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3' // 指定 path 元素的填充色
            }
        },
        vertices: [
            { x: 60, y: 49 },
            { x: 60, y: 295 }
        ]
    },
    {
        source: 'BcgNode1',
        target: 'BcgNode31',
        // 默认line的label
        labels: [
            {
                attrs: { label: { text: '召回' } }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3', // 指定 path 元素的填充色
                targetMarker: {
                    name: 'block', // 椭圆
                    rx: 10, // 椭圆箭头的 x 半径
                    ry: 6 // 椭圆箭头的 y 半径
                }
            }
        },
        vertices: [
            { x: 560, y: 160 },
            { x: 560, y: 385 }
        ]
    },
    {
        source: 'user',
        target: 'BcgNode32',
        // 默认line的label
        // labels: [
        //     {
        //         attrs: { label: { text: '点赞/收藏' } }
        //     }
        // ],
        // 自定义line的label
        customLabels: [
            {
                attrs: {
                    text: {
                        text: '点击/购买'
                    }
                },
                position: {
                    distance: 150
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3' // 指定 path 元素的填充色
            }
        },
        vertices: [
            { x: 600, y: 49 },
            { x: 600, y: 415 }
        ]
    },
    {
        source: { x: -140, y: -65 },
        vertices: [
            { x: 168, y: 168 }
            // { x: 60, y: 315 }
        ],
        target: {
            cell: '北海公园',
            port: 'port1' // 链接桩 ID
        },
        customLabels: [
            {
                line: {
                    sourceMarker: 'none', // 实心箭头
                    targetMarker: {
                        name: 'ellipse', // 椭圆
                        rx: 0, // 椭圆箭头的 x 半径
                        ry: 0, // 椭圆箭头的 y 半径
                        fill: '#1b6bdc00', // 使用自定义填充色
                        stroke: '#1b6bdc00', // 使用自定义边框色
                        strokeWidth: 0,
                        d: 'M 20 -10 0 0 20 10 Z'
                    }
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3',
                strokeDasharray: 1,
                targetMarker: 'classic',
                style: {
                    animation: 'ant-line 30s infinite linear'
                }
            }
        }
    },
    {
        source: { x: -20, y: -49 },
        vertices: [
            { x: 309, y: 215 },
            { x: 235, y: 215 }
        ],
        target: {
            cell: '北海公园',
            port: 'port2' // 链接桩 ID
        },
        customLabels: [
            {
                line: {
                    sourceMarker: 'none', // 实心箭头
                    targetMarker: {
                        name: 'ellipse', // 椭圆
                        rx: 0, // 椭圆箭头的 x 半径
                        ry: 0, // 椭圆箭头的 y 半径
                        fill: '#1b6bdc00', // 使用自定义填充色
                        stroke: '#1b6bdc00', // 使用自定义边框色
                        strokeWidth: 0,
                        d: 'M 20 -10 0 0 20 10 Z'
                    }
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3',
                strokeDasharray: 1,
                targetMarker: 'classic',
                style: {
                    animation: 'ant-line 20s infinite linear'
                }
            }
        }
    },
    {
        source: { x: -20, y: -49 },
        vertices: [
            { x: 309, y: 215 },
            { x: 365, y: 215 }
        ],
        target: {
            cell: '颐和园',
            port: 'port1' // 链接桩 ID
        },
        customLabels: [
            {
                line: {
                    sourceMarker: 'none', // 实心箭头
                    targetMarker: {
                        name: 'ellipse', // 椭圆
                        rx: 0, // 椭圆箭头的 x 半径
                        ry: 0, // 椭圆箭头的 y 半径
                        fill: '#1b6bdc00', // 使用自定义填充色
                        stroke: '#1b6bdc00', // 使用自定义边框色
                        strokeWidth: 0,
                        d: 'M 20 -10 0 0 20 10 Z'
                    }
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3',
                strokeDasharray: 1,
                targetMarker: 'classic',
                style: {
                    animation: 'ant-line 20s infinite linear'
                }
            }
        }
    },
    {
        source: { x: 140, y: -65 },
        vertices: [
            { x: 490, y: 168 }
            // { x: 60, y: 315 }
        ],
        target: {
            cell: '奥森公园',
            port: 'port1' // 链接桩 ID
        },
        customLabels: [
            {
                line: {
                    sourceMarker: 'none', // 实心箭头
                    targetMarker: {
                        name: 'ellipse', // 椭圆
                        rx: 0, // 椭圆箭头的 x 半径
                        ry: 0, // 椭圆箭头的 y 半径
                        fill: '#1b6bdc00', // 使用自定义填充色
                        stroke: '#1b6bdc00', // 使用自定义边框色
                        strokeWidth: 0,
                        d: 'M 20 -10 0 0 20 10 Z'
                    }
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3',
                strokeDasharray: 1,
                targetMarker: 'classic',
                style: {
                    animation: 'ant-line 30s infinite linear'
                }
            }
        }
    },
    {
        source: { x: -128, y: 72 },
        vertices: [
            // { x: 490, y: 168 }
            // { x: 60, y: 315 }
        ],
        target: {
            cell: '1小时旅拍',
            port: 'port1' // 链接桩 ID
        },
        customLabels: [
            {
                line: {
                    sourceMarker: 'none', // 实心箭头
                    targetMarker: {
                        name: 'ellipse', // 椭圆
                        rx: 0, // 椭圆箭头的 x 半径
                        ry: 0, // 椭圆箭头的 y 半径
                        fill: '#1b6bdc00', // 使用自定义填充色
                        stroke: '#1b6bdc00', // 使用自定义边框色
                        strokeWidth: 0,
                        d: 'M 20 -10 0 0 20 10 Z'
                    }
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3',
                strokeDasharray: 1,
                targetMarker: 'classic',
                style: {
                    animation: 'ant-line 30s infinite linear'
                }
            }
        }
    },
    {
        source: { x: 0, y: 72 },
        vertices: [
            // { x: 490, y: 168 }
            // { x: 60, y: 315 }
        ],
        target: {
            cell: '双人皮划艇',
            port: 'port1' // 链接桩 ID
        },
        customLabels: [
            {
                line: {
                    sourceMarker: 'none', // 实心箭头
                    targetMarker: {
                        name: 'ellipse', // 椭圆
                        rx: 0, // 椭圆箭头的 x 半径
                        ry: 0, // 椭圆箭头的 y 半径
                        fill: '#1b6bdc00', // 使用自定义填充色
                        stroke: '#1b6bdc00', // 使用自定义边框色
                        strokeWidth: 0,
                        d: 'M 20 -10 0 0 20 10 Z'
                    }
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3',
                strokeDasharray: 1,
                targetMarker: 'classic',
                style: {
                    animation: 'ant-line 30s infinite linear'
                }
            }
        }
    },
    {
        source: { x: 130, y: 72 },
        vertices: [
            // { x: 490, y: 168 }
            // { x: 60, y: 315 }
        ],
        target: {
            cell: '1日跟团游',
            port: 'port1' // 链接桩 ID
        },
        customLabels: [
            {
                line: {
                    sourceMarker: 'none', // 实心箭头
                    targetMarker: {
                        name: 'ellipse', // 椭圆
                        rx: 0, // 椭圆箭头的 x 半径
                        ry: 0, // 椭圆箭头的 y 半径
                        fill: '#1b6bdc00', // 使用自定义填充色
                        stroke: '#1b6bdc00', // 使用自定义边框色
                        strokeWidth: 0,
                        d: 'M 20 -10 0 0 20 10 Z'
                    }
                }
            }
        ],
        attrs: {
            line: {
                stroke: '#b3cef3',
                strokeDasharray: 1,
                targetMarker: 'classic',
                style: {
                    animation: 'ant-line 30s infinite linear'
                }
            }
        }
    }
];
// tabs数据
const scenarios = [
    {
        image:
            'https://s3plus.meituan.net/v1/mss_1ada830d56584ddeae1b0899c231c552/source/INGEE_SOURCEFILE/6740525/ingeetemp/1656484535495/assets/%E7%BC%96%E7%BB%84%403x.png',
        name: '搜索推荐场景',
        relative_tasks: [
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '链接预测'
            }
        ],
        synopsis:
            '将搜索推荐场景中的实体(user/query/poi/游玩等)作为节点，交互关系(点击/下单/购买/收藏/评论等)作为边构图，通过图上的信息传播和聚合函数，学习到实体的向量表征，优化召回排序等效果。'
    },
    {
        image: 'https://p0.meituan.net/ingee/45187ab0eb89d75fb2fbaa37e82be889144479.png',
        name: '增长场景',
        relative_tasks: [
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '链接预测'
            },
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '节点分类'
            },
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '图分类'
            },
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '图聚类'
            }
        ],
        synopsis: '可通过链接预测、节点分类、社区发现等图学习任务，融合全域数据，提升业务增长。例如用户全景画像、新用户圈选等。'
    },
    {
        image: 'https://p0.meituan.net/ingee/0399a944489f26b660123df6426a39c1132848.png',
        name: '风控场景',
        relative_tasks: [
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '链接预测'
            },
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '节点分类'
            }
        ],
        synopsis:
            '将用户、设备、业务等实体作为节点，事实关系和交互关系作为边构图，通过图学习算法挖掘出节点的设备/行为聚集性等深层次特征，提升风控算法识别效率。如金融风控黑用户挖掘等。'
    },
    {
        image: 'https://p0.meituan.net/ingee/14d936548a05d6c33f2f1c751793143f266606.png',
        name: 'NLP任务',
        relative_tasks: [
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '链接预测'
            },
            {
                link: 'https://km.sankuai.com/page/1336362731',
                name: '节点分类'
            }
        ],
        synopsis:
            '使用图来表示文本，相比于词袋或序列表示方式，基于图表示的文本，不再局限于前后位置的序列关系；且可以捕获位置关系、语法关系、语义关系等在内的多种关系。如一个句子，去表示句子的句法，可建立dependency graph或者constituency graph；若捕捉句子的语义，可以建立一个AMR graph或者IE graph。'
    }
];
module.exports = {
    CustomLine,
    CustomNode: {
        userNode,
        actionNode,
        QueryNode,
        PlayNode,
        BcgNode
    },
    X6data,
    scenarios
};
