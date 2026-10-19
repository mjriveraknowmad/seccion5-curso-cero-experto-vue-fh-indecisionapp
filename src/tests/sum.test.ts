import { expect, test } from 'vitest'
import { sum, addInArray } from './sum.ts'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('add 1 in empty array', ()=>{
    let ar:number[] = addInArray([], 1)
    expect(ar).toEqual([1]);
})