var N = 5
var matrix = [
                [ 1, 2, 3, 4, 5 ],
                [6, 7, 8, 9, 10 ],
                [ 11, 12, 13, 14, 15 ],
                [ 16, 17, 18, 19, 20 ],
                [ 21, 22, 23, 24, 25 ] 
            ]
var top = 0
var left = 0
var right = N-1
var bottom = N-1
var ans = []
for (let i = 0; i < Math.ceil(N/2); i++) {
    for (let k = left; k <= right; k++) {
        ans.push(matrix[top][k])
    }
    top++
    for (let k = top; k <= bottom; k++) {
        ans.push(matrix[k][right])
    }
    right--
    for (let k = right; k >= left; k--) {
        ans.push(matrix[bottom][k])
    }
    bottom--
    for (let k = bottom; k >= top; k--) {
        ans.push(matrix[k][left])
    }
    left++
    
}
console.log(ans.join(' '))