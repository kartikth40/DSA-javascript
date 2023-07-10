// 2. ADD TWO NUMBERS
// You are given two non-empty linked lists representing
// two non-negative integers. The digits are stored in
// reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// https://leetcode.com/problems/add-two-numbers/

// for example =>
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

import { ListNode } from '../data_structures/linkedList.js'

const addTwoNumbers = (l1, l2) => {
  let result = new ListNode(0)
  let current = result
  let currentSum = 0

  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      currentSum += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      currentSum += l2.val
      l2 = l2.next
    }

    current.next = new ListNode(currentSum % 10)
    current = current.next
    currentSum = (currentSum / 10) >> 0
  }

  if (currentSum !== 0) {
    current.next = new ListNode(currentSum % 10)
    current.next.next = null
  }

  return result.next
}

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
const output = addTwoNumbers(l1, l2)

console.log(output)

// output

// [7,0,8]
