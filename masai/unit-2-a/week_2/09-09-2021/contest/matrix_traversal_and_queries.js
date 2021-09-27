// var [N, M, q, arr] = [3, 3, 1, [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]]
var [N, M, q, arr] = [3, 3, 2, [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]]
var ans = []
for (let i = 0; i < N; i++) {
    if ((i+q)%2==0) {
        for (let j = M-1; j >=0 ; j--) {
            ans.push(arr[i][j])
        }
    } else {
        for (let j = 0; j < M; j++) {
            ans.push(arr[i][j])
        }
    }
}
console.log(ans.join(' '))



