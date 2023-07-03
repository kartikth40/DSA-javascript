// 141. LINKED LIST CYCLE
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// https://leetcode.com/problems/linked-list-cycle/

// for example =>
// Input: head = [3,2,0,-4], pos = 1
// Output: true

import { ListNode } from '../data_structures/LinkedList.js'

const hasCycle = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) return true
  }

  return false
}

const head = new ListNode(3)
head.next = new ListNode(2)
let cycleBackNode = head.next
head.next.next = new ListNode(0)
head.next.next.next = new ListNode(-4)
head.next.next.next.next = cycleBackNode

const output = hasCycle(head)

console.log(output)

// output

// true
