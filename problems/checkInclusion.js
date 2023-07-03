// 567. PERMUTATION IN STRING
// Given two strings s1 and s2, return true if s2 contains
// a permutation of s1, or false otherwise.
// https://leetcode.com/problems/permutation-in-string/

// for example =>
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false

  let map1 = new Map()
  let map2 = new Map()
  let i = 0
  let j = s1.length - 1

  fillMap(map1, s1, s1.length)
  fillMap(map2, s2, s1.length)

  while (j <= s2.length) {
    if (mapsAreEqual(map1, map2)) {
      return true
    }

    map2.set(s2[i], map2.get(s2[i]) - 1)
    if (map2.get(s2[i]) === 0) {
      map2.delete(s2[i])
    }
    i++
    j++

    let curCount = map2.has(s2[j]) ? map2.get(s2[j]) : 0
    map2.set(s2[j], curCount + 1)
  }
  return false
}

const fillMap = (map, s, n) => {
  for (let i = 0; i < n; i++) {
    if (map.has(s[i])) {
      let count = map.get(s[i])
      map.set(s[i], count + 1)
    } else {
      map.set(s[i], 1)
    }
  }
}

const mapsAreEqual = (map1, map2) => {
  if (map1.size !== map2.size) {
    return false
  }

  for (let key of map1.keys()) {
    if (!map2.has(key) || map1.get(key) !== map2.get(key)) {
      return false
    }
  }
  return true
}

const s1 = 'ab'
const s2 = 'eidbaooo'
const output = checkInclusion(s1, s2)

console.log(output)

// output

// true
