// 160. INTERSECTION OF TWO LINKED LIST
// Given the heads of two singly linked-lists headA and headB,
// return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.
// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

// for example =>
// Input: listA = [1,9,1,2,4], listB = [3,2,4]
// Output: '2'

import { ListNode } from '../data_structures/LinkedList.js'

const getIntersectionNode = (headA, headB) => {
  let a = headA
  let b = headB

  while (a !== b) {
    a = a ? a.next : headB
    b = b ? b.next : headA
  }

  return a
}

const headA = new ListNode(1)
headA.next = new ListNode(9)
headA.next.next = new ListNode(1)
headA.next.next.next = new ListNode(2)
let intersectionNode = headA.next.next.next
headA.next.next.next.next = new ListNode(4)
const headB = new ListNode(3)
headB.next = intersectionNode
const output = getIntersectionNode(headA, headB)

console.log(output)

// output

// '2'
