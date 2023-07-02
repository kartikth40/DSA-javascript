// 204. COUNT PRIMES
// Given an integer n, return the number of prime numbers that are strictly less than n.
// https://leetcode.com/problems/count-primes/

// for example =>
// Input: n = 10
// Output: 4

const countPrimes = (n) => {
  if (n < 2) return 0
  let ans = 0

  const primes = new Array(n).fill(1)
  primes[0] = primes[1] = 0

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = 0
      }
    }
  }
  for (let i = 2; i < n; i++) {
    if (primes[i]) ans++
  }

  return ans
}

const n = 10
const output = countPrimes(n)

console.log(output)

// output

// 4
