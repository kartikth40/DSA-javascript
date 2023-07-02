// 121. BEST TIME TO BUY AND SELL STOCK
// You are given an array prices where prices[i]
// is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to
// buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.
// ---problem link---

// for example =>
// Input: prices = [7,1,5,3,6,4]
// Output: 5

const maxProfit = (prices) => {
  const maxArray = new Array(prices.length).fill(0)
  let currMax = 0
  for (let i = prices.length - 1; i >= 0; i--) {
    currMax = Math.max(currMax, prices[i])
    maxArray[i] = currMax
  }
  let currMaxProfit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    currMaxProfit = Math.max(currMaxProfit, maxArray[i + 1] - prices[i])
  }
  return currMaxProfit
}

const prices = [7, 1, 5, 3, 6, 4]
const output = maxProfit(prices)

console.log(output)

// output

// 5
