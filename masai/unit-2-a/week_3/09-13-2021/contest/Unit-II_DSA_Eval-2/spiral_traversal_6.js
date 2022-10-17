var N = 3
var matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
spiralTraverse4(N, matrix)

function spiralTraverse4(N, matrix) {
    var top = 0
    var left = 0
    var right = N-1
    var bottom = N-1
    var ans = []
    for (let i = 0; i < Math.ceil(N/2); i++) {
        for (let j = left; j <= right; j++) {
            ans.push(matrix[top][j])
        }
        top++
        for (let j = top; j <= bottom; j++) {
            ans.push(matrix[j][right])
        }
        right--
        for (let j = right; j >= left; j--) {
            ans.push(matrix[bottom][j])
        }
        bottom--
        for (let j = bottom; j >= top; j--) {
            ans.push(matrix[j][left])
        }
        left++
    }
    console.log(ans.join(' '))
}