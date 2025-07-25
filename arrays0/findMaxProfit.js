function findMaxProfit(prices) {
  let minPrice = prices[0];
  maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    const profit = price - minPrice;
    if (price < minPrice) {
      minPrice = price;
    }
    if (profit > maxProfit) {
      maxProfit = profit;
    } 
  }
  return maxProfit;
}
// const prices = [7, 1, 5, 3, 6, 4];
const prices = [1,3,5,7,2,8,10];
const maxProfitVal = findMaxProfit(prices);
console.log("maxProfit is " + maxProfitVal);
