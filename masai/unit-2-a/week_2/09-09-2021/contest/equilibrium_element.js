var N = 5
var arr = [ 3, 3, 5, 5, 1 ]
var count = 0
for (let i = 1; i < N; i++) {
    var sum_A = 0
    var sum_B = 0
    for (let j = 0; j < i; j++) {
        sum_A += arr[j];
    }
    for (let k = i+1; k < N; k++) {
        sum_B += arr[k];
    }
    if (sum_A==sum_B) {
        console.log(i+1)
        count++
        break
    }
}
if (count==0) {
    console.log(-1)    
}