import { NodeList } from "./NodeList";
import { DoubleNodeList } from './DoubleNodeList'
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

const DbList = new DoubleNodeList()
describe('DoubleNodeList', () => {

  it('isEmpty', () => {
    expect(DbList.isEmpty()).toBe(true)
  })

  it('size', () => {
    expect(DbList.size()).toBe(0)
  })

  it('toString', () => {
    expect(DbList.toString()).toBe('null')
  })

  it('append', () => {
    DbList.append('ldq')
    DbList.append('link')
    DbList.append('nb')
    expect(DbList.toString()).toBe('ldq->link->nb->null')
    expect(DbList.size()).toBe(3)
  })

  it('getHead', () => {
    expect(DbList.getHead()).toBe('ldq')
  })

  it('getTail', () => {
    expect(DbList.getTail()).toBe('nb')
  })

  it('insert', () => {
    expect(DbList.insert(10, 'top')).toBe(false)
    expect(DbList.insert(0, 'top')).toBe(true)
    expect(DbList.toString()).toBe("top->ldq->link->nb->null")
    expect(DbList.size()).toBe(4)
  })

  it('indexOf', () => {
    expect(DbList.indexOf('no')).toBe(-1)
    expect(DbList.indexOf('top')).toBe(0)
    expect(DbList.indexOf('ldq')).toBe(1)
    expect(DbList.indexOf('link')).toBe(2)
    expect(DbList.indexOf('nb')).toBe(3)
    expect(DbList.indexOf(null)).toBe(-1)
  })

  it('get', () => {
    expect(DbList.get(0)).toBe('top')
    expect(DbList.get(1)).toBe('ldq')
    expect(DbList.get(2)).toBe('link')
    expect(DbList.get(3)).toBe('nb')
    expect(DbList.get(4)).toBe(null)
  })

  it('update', () => {
    expect(DbList.update(0, 'top2')).toBe(true)
    expect(DbList.toString()).toBe("top2->ldq->link->nb->null")
  })

  it('removeAt', () => {
    expect(DbList.removeAt(0)).toBe(true)
    expect(DbList.toString()).toBe("ldq->link->nb->null")
    expect(DbList.size()).toBe(3)
  })

  it('remove', () => {
    expect(DbList.removeAt(0)).toBe(true)
    expect(DbList.toString()).toBe("link->nb->null")
    expect(DbList.size()).toBe(2)
  })

  it('backwordString', () => {
    expect(DbList.backwordString()).toBe("link->nb->null")
  })
  it('forwardString', () => {
    expect(DbList.forwardString()).toBe("nb->link->null")
  })
})