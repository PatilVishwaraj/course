var N = 4
var M = 4
var matrix = [
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
  ]
  SumNonBorder(N, M, matrix)

function SumNonBorder(N, M, matrix) {
    var sum = 0
    for (let i = 1; i < N-1; i++) {
        for (let j = 1; j < M-1; j++) {
            sum+= matrix[i][j]
        }
    }
    console.log(sum)
}

  