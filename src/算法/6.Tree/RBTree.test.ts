import { RBTree, RBNode } from "../6.Tree/RBTree";

import { expect, assert, describe, it, test } from 'vitest';

describe('红黑树 RBTree', () => {
  it('RBNode', () => {
    expect(() => new RBNode(1, null, null, null, 'white')).toThrowError('color can only be RED or BLACK')
  })

  it('isEffectiveColor', () => {
    /**
     * 中序遍历红黑树，打印结果，查看插入操作是否正确
     * @param {RBNode} root
     * @param {number} deep
     * @returns
     */
    //   function inorder(root: any, deep = 1) {
    //     if (!root) return
    //     let tab = ''
    //     for (let i = 1; i < deep; i++) {
    //       tab += '\t'
    //     }
    //     root.left && inorder(root.left, deep + 1)
    //     console.log(
    //       '%c' + tab + root.val,
    //       root.color[0] === 'R' ? 'color:red' : 'color:black'
    //     )
    //     root.right && inorder(root.right, deep + 1)
    //   }
    //   const tree = new RBTree()
    //   let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
    //   arr.forEach(v => {
    //     console.log(`------插入数据${v}------`)
    //     tree.insert(v)
    //     console.log('--------------------')
    //   })
    //   inorder(tree.root)
  })
  // expect(() => new RBNode(1, null, null, null, 'white')).toBe('color can only be RED or BLACK')
})