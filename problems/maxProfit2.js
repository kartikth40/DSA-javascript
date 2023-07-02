// 122. BEST TIME T0 BUY AND SELL STOCK II

// You are given an integer array prices where prices[i]
// is the price of a given stock on the ith day.On each day,
// you may decide to buy and/or sell the stock. You can only hold at most one share
// of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

// for example =>
// Input: prices = [7,1,5,3,6,4]
// Output: 7

const maxProfit2 = (prices) => {
  let maxProf = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      maxProf += prices[i] - prices[i - 1]
    }
  }
  return maxProf
}

const prices = [7, 1, 5, 3, 6, 4]
const output = maxProfit2(prices)

console.log(output)

// output

// 7
