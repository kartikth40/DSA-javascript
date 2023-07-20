// 1046. LAST STONE WEIGHT
// You are given an array of integers stones where stones[i] is the weight of the ith stone.
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
// Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
// Return the weight of the last remaining stone. If there are no stones left, return 0.
// https://leetcode.com/problems/last-stone-weight/

// for example =>
// Input: stones = [2,7,4,1,8,1]
// Output: 1

import { MaxHeap } from '../data_structures/heap.js'

const lastStoneWeight = (stones) => {
  const heap = new MaxHeap()
  stones.map((stone) => heap.add(stone))
  heap.print()

  while (heap.size > 1) {
    let x = heap.popMax()
    let y = heap.popMax()
    const res = x - y
    if (res > 0) heap.add(res)
  }

  return heap.size ? heap.getMax() : 0
}

const stones = [2, 7, 4, 1, 8, 1]
const output = lastStoneWeight(stones)

console.log(output)

// output

// 1
