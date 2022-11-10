import { BinarySearchTree } from "./Tree";

import { expect, assert, describe, it, test } from 'vitest';

describe('二叉搜索树 BinarySearchTree', () => {
  var bst = new BinarySearchTree();

  it('init Tree', () => {
    const arr: number[] = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
    arr.forEach((f: number) => {
      bst.insert(f);
    })
    let res = bst.preOrderTraversal();
    expect(res).toEqual([11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25])
  })

  it('preOrderTraversal 先序遍历', () => {
    let res = bst.preOrderTraversal();
    expect(res).toEqual([11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]);
  })

  it('midOrderTraversal 中序遍历', () => {
    let res = bst.midOrderTraversal();
    expect(res).toEqual([3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
  })
  it('posOrderTraversal 后序遍历', () => {
    let res = bst.posOrderTraversal();
    expect(res).toEqual([3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]);
  })
})

