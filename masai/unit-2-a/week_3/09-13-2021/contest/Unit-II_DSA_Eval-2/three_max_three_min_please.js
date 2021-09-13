var array = [1,2, 3, 4]
var N = 4
var container = {}
for (let i = 0; i < N; i++) {
    container[array[i]] = 1
}
var array2 = Object.keys(container)
var M = array2.length
if (M<3) {
    console.log('Not Possible')
    console.log('Not Possible')
} else {
    console.log(array2[0], array2[1], array2[2])
    console.log(array2[M-3], array2[M-2], array2[M-1])
}

8

