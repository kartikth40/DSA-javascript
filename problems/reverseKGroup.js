// 25. REVERSE NODES IN K-GROUP
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// ---problem link---

// for example =>
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

import { ListNode } from '../data_structures/linkedList.js'

const reverseKGroup = (head, k) => {
  let cur = head
  for (let i = 0; i < k; i++) {
    if (!cur) return head
    cur = cur.next
  }

  cur = head
  let prev = null
  for (let i = 0; i < k; i++) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  head.next = reverseKGroup(cur, k)
  return prev
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
const k = 2
const output = reverseKGroup(head, k)

console.log(output)

// output

//
