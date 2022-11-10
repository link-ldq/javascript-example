import { BinarySearchTree } from "./Tree";

import { expect, assert, describe, it, test } from 'vitest';

describe('二叉搜索树 BinarySearchTree', () => {
  var bst = new BinarySearchTree();
  const arr: number[] = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];

  it('init Tree', () => {
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
  it('min 最小值', () => {
    expect(bst.min()).toEqual(3);
  })
  it('min 最大值', () => {
    expect(bst.max()).toEqual(25);
  })
  it('search 查找key', () => {
    [...arr].forEach(f => {
      expect(bst.search(f)).toEqual(true);
    });
    [0, 1, -1, 100, -100, 9999, -9999].forEach(f => {
      expect(bst.search(f)).toEqual(false);
    })
  })
})

