import { Queue, passGame, PriorityQueue } from "./Queue";

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
describe('优先级队列', () => {
  it('PriorityQueue', () => {

    interface QueueEl {
      value: any,
      priority: number
    }

    // 比较函数
    const hanlder = function (el: any, el2: any): boolean {
      return el.priority < el2.priority
    }
    // 处理元素
    const getElement = function (el: QueueEl): QueueEl {
      return {
        value: el.value,
        priority: el.priority / 10
      }
    }
    // 处理输出hanlder
    const toStrHanlder = function (element: QueueEl): string {
      return element.value + '-' + element.priority
    }
    const pq = new PriorityQueue(hanlder, getElement, toStrHanlder)

    pq.enqueue({ value: 'link', priority: 50 })
    pq.enqueue({ value: 'ldq', priority: 100 })
    pq.enqueue({ value: 'nb', priority: 10 })

    expect(pq.toString()).toBe('nb-1 link-5 ldq-10')
  })
})