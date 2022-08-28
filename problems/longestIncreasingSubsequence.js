// LONGEST INCREASING SUBSEQUENCE
// For a sequence a1, a2,..., an, find the length of
// the longest increasing subsequence ai1, ai2,...,aik
// such that i1 < i2 <...<ik and ai1 < ai2 <...< aik

// for example =>
// [5  2  8  6  3  6  9  5]
//     |________|__|__|

const longestIncreasingSubsequence = (arr) => {
  let dp = new Array(arr.length).fill(1)
  for (let i = 1; i < arr.length; i++) {
    let currentLongestLength = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && currentLongestLength < arr[j]) {
        currentLongestLength = dp[j]
      }
    }

    dp[i] = 1 + currentLongestLength
  }

  return Math.max(...dp)
}

const arr = [5, 2, 8, 6, 3, 6, 9, 5]
let len = longestIncreasingSubsequence(arr)

console.log(len)

// output

// 4
