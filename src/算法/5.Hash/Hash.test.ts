import { HashFn, HashCl } from "./Hash";

import { expect, assert, describe, it, test } from 'vitest';

describe('Hash Function 哈希', () => {
  it('HashFn', () => {
    expect(HashFn('link', 10)).toBe(6)
  })
})

describe('Hash Class 哈希', () => {
  const hash = new HashCl()
  it('HashCl', () => {
    expect(hash.hashFunc('link', 10)).toBe(6)
  })
})