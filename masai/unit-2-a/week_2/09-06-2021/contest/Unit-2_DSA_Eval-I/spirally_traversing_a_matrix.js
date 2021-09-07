var N = 4
var matrix = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ]
var top = 0
var left = 0
var right = N-1
var bottom = N-1
var ans = []
var size = N*N
var count = 0
while (count<size) {
    for (let i = left; i <= right && count<size; i++) {
        ans.push(matrix[top][i])
        count++
    }
    top++
    for (let i = top; i <= bottom && count<size; i++) {
        ans.push(matrix[i][right])
        count++
    }
    right--
    for (let i = right; i >= left && count<size; i--) {
        ans.push(matrix[bottom][i])
        count++
    }
    bottom--
    for (let i = bottom; i >= top && count<size; i--) {
        ans.push(matrix[i][left])
        count++
    }
    left++
}
console.log(ans.join(' '))