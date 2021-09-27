var array = [-4, -7, -2, -11, -2, -8, 0, -122, -66, 10]
console.log(array)
var N = 10
var container = {}
for (let i = 0; i < N; i++) {
    container[array[i]] = 1
}
var array2 = Object.keys(container).map(Number)
console.log(array2)
array2.sort()
console.log(array2)
var M = array2.length
if (M<3) {
    console.log('Not Possible')
    console.log('Not Possible')
} else {
    console.log(array2[0], array2[1], array2[2])
    console.log(array2[M-3], array2[M-2], array2[M-1])
}
// Expected Output
// -122 -66 -11
// -2 0 10

