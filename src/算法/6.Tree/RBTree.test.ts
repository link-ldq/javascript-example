import { RBTree, RBNode } from "../6.Tree/RBTree";

import { expect, assert, describe, it, test } from 'vitest';

describe('红黑树 RBTree', () => {
  test('RBNode', () => {
    expect(() => new RBNode(1, null, null, null, 'white')).toThrowError('color can only be RED or BLACK')
  })
  // it('isEffectiveColor', () => {
  // })
})