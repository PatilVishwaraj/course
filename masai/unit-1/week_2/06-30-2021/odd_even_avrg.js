var input = [34, -87, 23, 12, 98, -2, 0] ,
    even_sum = 0 , even_count = 0 ,
    odd_sum = 0 , odd_count = 0

for (var i=0; i<input.length; i++) {
    if (input[i]%2==0){
        even_sum += input[i]
        even_count++
    } else {
        odd_sum += input[i]
        odd_count++
    }
}

var even_avrg = even_sum/even_count ,
    odd_avrg = odd_sum/odd_count

console.log("Even Average ->" + even_avrg)
console.log("Odd Average ->" + odd_avrg)