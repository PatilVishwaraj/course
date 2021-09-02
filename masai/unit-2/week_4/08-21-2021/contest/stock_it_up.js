var N = 4
var elements = [0, 1, 1, 1, 0, 0, 1]



var prices = [550, 240, 84, 159, 80, 160, 252]
var totalCost = 0
for (let i = 0; i < 7; i++) {
    if (elements[i]) {
        totalCost += prices[i]
    }
}
console.log(totalCost*N)