import { Set } from "./Set";

import { expect, assert, describe, it, test } from 'vitest';

const setlist = new Set();

describe('Set 集合', () => {
  it('add', () => {
    expect(setlist.add('first')).toBe(true)
    expect(setlist.add('second')).toBe(true)
    expect(setlist.add('three')).toBe(true)
    expect(setlist.add('four')).toBe(true)
    expect(setlist.add('five')).toBe(true)
  })

  it('remove', () => {
    expect(setlist.remove('first')).toBe(true)
    expect(setlist.remove('five')).toBe(true)
  })

  it('has', () => {
    expect(setlist.has('first')).toBe(false)
  })

  it('size', () => {
    expect(setlist.size()).toBe(3)
  })

  it('values', () => {
    expect(setlist.values()).toEqual(['second', 'three', 'four'])
  })

  it('clear', () => {
    expect(setlist.clear()).toBe(true)
  })

})