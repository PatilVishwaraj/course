var N = 4
var M = 3
var arr = [  [ 1, 10, 9 ], 
                [ 2, 11, 8 ], 
                [ 3, 12, 7 ], 
                [ 4, 5, 6 ] 
             ]
var top = 0
var left = 0
var right = M-1
var bottom = N-1
var ans = []
var limit = M*N
var count = 0
for (let i = 0; i < Math.ceil(N/2) && count < limit; i++) {
    for (let k = top; k <= bottom && count < limit; k++) {
        ans.push(arr[k][left])
        count++
    }
    left++
    for (let k = left; k <= right && count < limit; k++) {
        ans.push(arr[bottom][k])
        count++
    }
    bottom--
    for (let k = bottom; k >= top && count < limit; k--) {
        ans.push(arr[k][right])
        count++
    }
    right--
    for (let k = right; k >= left && count < limit; k--) {
        ans.push(arr[top][k])
        count++
    }
    top++
}
console.log(ans.join(' '))