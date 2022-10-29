import { Queue, passGame } from "./Queue";

import { expect, assert, describe, it, test } from 'vitest';


const queue = new Queue();

describe('Queue', () => {
  it('new', () => {
    expect(queue.size()).toBe(0)
  })
  it('enqueue', () => {
    queue.enqueue('top')
    expect(queue.size()).toBe(1)
  })
  it('front', () => {
    expect(queue.front()).toBe('top')
  })
  it('iSEmpty', () => {
    expect(queue.isEmpty()).toBe(false)
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
  })
  it('size', () => {
    queue.enqueue('1')
    queue.enqueue('2')
    expect(queue.size()).toBe(2)
  })
  it('toString', () => {
    expect(queue.toString()).toBe('1 2')
  })
})
describe('击鼓传花', () => {
  it('passGame', () => {
    expect(passGame(['ldq', 'link', 'nb'], 5)).toBe(0)
  })
})