var n = 3
var m = 3
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (let i = 0; i < n; i++) {
    var sum = 0
    for (let j = 0; j < m; j++) {
        if (arr[j][i]%2==0) {
            sum+=arr[j][i]
        }
    }
    console.log(sum)
}