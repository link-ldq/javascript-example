import { Hash } from "./Hash";

import { expect, assert, describe, it, test } from 'vitest';

describe('Hash 哈希', () => {
  it('Hash', () => {
    expect(Hash('link', 10)).toBe(6)
  })
})