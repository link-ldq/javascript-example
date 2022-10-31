import { NodeList } from "./NodeList";

import { expect, assert, describe, it, test } from 'vitest';

const list = new NodeList();

describe('NodeList', () => {

  it('isEmpty', () => {
    expect(list.isEmpty()).toBe(true)
  })

  it('size', () => {
    expect(list.size()).toBe(0)
  })

  it('toString', () => {
    expect(list.toString()).toBe('null')
  })

  it('append', () => {
    list.append('ldq')
    list.append('link')
    list.append('nb')
    expect(list.toString()).toBe('ldq->link->nb->null')
    expect(list.size()).toBe(3)
  })

  it('insert', () => {
    expect(list.insert(10, 'top')).toBe(false)
    expect(list.insert(0, 'top')).toBe(true)
    expect(list.toString()).toBe("top->ldq->link->nb->null")
    expect(list.size()).toBe(4)
  })

  it('indexOf', () => {
    expect(list.indexOf('no')).toBe(-1)
    expect(list.indexOf('top')).toBe(0)
    expect(list.indexOf('ldq')).toBe(1)
    expect(list.indexOf('link')).toBe(2)
    expect(list.indexOf('nb')).toBe(3)
    expect(list.indexOf(null)).toBe(-1)
  })

  it('get', () => {
    expect(list.get(0)).toBe('top')
    expect(list.get(1)).toBe('ldq')
    expect(list.get(2)).toBe('link')
    expect(list.get(3)).toBe('nb')
    expect(list.get(4)).toBe(null)
  })

  it('update', () => {
    expect(list.update(0, 'top2')).toBe(true)
    expect(list.toString()).toBe("top2->ldq->link->nb->null")
  })

  it('removeAt', () => {
    expect(list.removeAt(0)).toBe(true)
    expect(list.toString()).toBe("ldq->link->nb->null")
    expect(list.size()).toBe(3)
  })

  it('remove', () => {
    expect(list.removeAt(0)).toBe(true)
    expect(list.toString()).toBe("link->nb->null")
    expect(list.size()).toBe(2)
  })

})