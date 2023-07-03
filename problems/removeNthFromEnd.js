// 19. REMOVE NTH NODE FROM END OF LIST
// Given the head of a linked list, remove the nth node from the
// end of the list and return its head.
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// for example =>
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

import { ListNode } from '../data_structures/LinkedList.js'

const removeNthFromEnd = (head, n) => {
  let slow = head
  let fast = head

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  if (fast === null) {
    head = head.next
    return head
  }
  while (fast.next !== null) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next

  return head
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
const n = 2

const output = removeNthFromEnd(head, n)

console.log(output)

// output

// [1,2,3,5]
