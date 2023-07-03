// 146. LRU CACHE
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// https://leetcode.com/problems/lru-cache/

// for example =>
// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

class LRUCache {
  constructor(capacity) {
    this.map = new Map()
    this.capacity = capacity
  }
  get(key) {
    if (!this.map.has(key)) return -1
    const val = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }
  put(key, value) {
    this.map.delete(key)
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
      const firstItem = this.map.keys().next().value
      this.map.delete(firstItem)
    }
  }
}

const capacity = 2
const cache = new LRUCache(capacity)
cache.put(1, 1)
cache.put(2, 2)
cache.get(1)
cache.put(3, 3)
cache.get(2)
cache.put(4, 4)
cache.get(1)
cache.get(3)
cache.get(4)

// output

// [null, null, null, 1, null, -1, null, -1, 3, 4]
