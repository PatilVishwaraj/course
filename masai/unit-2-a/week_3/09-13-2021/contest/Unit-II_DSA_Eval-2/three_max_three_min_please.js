var arr = [-4, -7, -2, -11, -2, -8, 0, -122, -66, 10]
var N = 10
var container = {}
for (let i = 0; i < N; i++) {
    container[arr[i]] = 1
}
var arr2 = Object.keys(container).map(Number)
arr2.sort((a, b) => a-b)
var M = arr2.length
if (M<3) {
    console.log('Not Possible')
    console.log('Not Possible')
} else {
    console.log(arr2[0], arr2[1], arr2[2])
    console.log(arr2[M-3], arr2[M-2], arr2[M-1])
}
