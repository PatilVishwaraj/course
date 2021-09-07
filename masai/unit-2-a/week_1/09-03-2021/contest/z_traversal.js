var N = 3
var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]



if (N==1) {
    console.log(arr[0][0])
  } else {
    var line1 = []
    var line2 = []
    var line3 = []
    for (let i = 0; i < N; i++) {
      line1.push(arr[0][i])
      if (i!==0) {
        line2.push(arr[i][N-1-i])
        line3.push(arr[N-1][i])
      }
    }
    console.log(line1.join(" "),line2.join(" "),line3.join(" "))
  }