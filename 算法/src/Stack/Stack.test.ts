import { expect, assert, describe, it, test } from 'vitest'
import { Stack, dec2bin } from "./Stack";

const stack = new Stack();

describe('Stack', () => {
  it('new', () => {
    expect(stack.size()).toBe(0)
  })
  it('push', () => {
    stack.push(1)
    expect(stack.size()).toBe(1)
  })
  it('pop', () => {
    expect(stack.pop()).toBe(1)
  })
  it('peek', () => {
    stack.push('peek')
    expect(stack.peek()).toBe('peek')
  })
  it('isEmpty', () => {
    expect(stack.isEmpty()).toBe(false)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })
  it('size', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.size()).toBe(3)
  })
  it('toString', () => {
    expect(stack.toString()).toBe('3 2 1')
  })
})
describe('十进制 转 二进制', () => {
  it('dec2bin', () => {
    expect(dec2bin(100)).toBe('1 1 0 0 1 0 0')
  })
})
