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
    
  })
  it('peek', (ctx) => {

  })
  it('isEmpty', (ctx) => {

  })
  it('size', (ctx) => {

  })
  it('toString', (ctx) => {

  })
})