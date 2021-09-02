var arr = [
    [1, 2, 3], 
    [5, 6, 7], 
    [7, 8, 9]
]
var sum = 0
for (i=0; i<arr.length; i++){
    for (j=0; j<arr[i].length; j++){
        sum+= arr[i][j]
    }
}
console.log(sum)