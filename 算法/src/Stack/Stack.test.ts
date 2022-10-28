import { expect, assert, describe, it, test } from 'vitest'
import { Stack } from "./Stack";

const stack = new Stack();

describe('Stack', () => {
  it('new', (ctx) => {
    expect(stack.size()).toBe(0)
  })
  it('push', (ctx) => {
    stack.push(1)
    expect(stack.size()).toBe(1)
  })
  it('pop', (ctx) => {
    expect(stack.pop()).toBe(1)
  })
  it('peek', (ctx) => {
    stack.push('peek')
    expect(stack.peek()).toBe('peek')
  })
  it('isEmpty', (ctx) => {
    expect(stack.isEmpty()).toBe(false)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })
  it('size', (ctx) => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.size()).toBe(3)
  })
  it('toString', (ctx) => {
    expect(stack.toString()).toBe('1 2 3')
  })
})