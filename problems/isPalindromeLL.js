// 234. PALINDROME LINKED LIST
// Given the head of a singly linked list, return true
// if it is a palindrome or false otherwise.
// https://leetcode.com/problems/palindrome-linked-list/

// for example =>
// Input: head = [1,2,2,1]
// Output: true

import { ListNode } from '../data_structures/LinkedList.js'

const isPalindrome = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  slow = reverse(slow)
  let curr = head

  while (curr && slow) {
    if (curr.val !== slow.val) return false
    slow = slow.next
    curr = curr.next
  }
  return true
}

function reverse(head) {
  let curr = head
  let prev = null
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)
const output = isPalindrome(head)

console.log(output)

// output

// true
