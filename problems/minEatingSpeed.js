// 875. KOKO EATING BANANAS
// Koko loves to eat bananas. There are n piles of bananas,
// the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k.
// Each hour, she chooses some pile of bananas and eats k bananas from that pile.
// If the pile has less than k bananas, she eats all of them instead and will
// not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the
// bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.
// https://leetcode.com/problems/koko-eating-bananas/description/

// for example =>
// Input: piles = [3,6,7,11], h = 8
// Output: 4

const minEatingSpeed = (piles, h) => {
  function feasible(speed) {
    let currSum = 0
    for (let pile of piles) {
      currSum += Math.ceil(pile / speed)
    }
    return currSum <= h
  }
  let left = 1
  let right = Math.max(...piles)
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (feasible(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

const piles = [3, 6, 7, 11]
const h = 8
const output = minEatingSpeed(piles, h)

console.log(output)

// output

// 4
