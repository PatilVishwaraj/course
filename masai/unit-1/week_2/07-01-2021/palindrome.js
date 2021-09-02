var input = "masai"
var count = input.length-1
var ans = 0

for (var i=0; i<=count; i++) {
    var a = input[i]
    var b = input[count-i]
    if (a!==b) {
        ans++
    }
}
if (ans==0) {
    console.log("YES")
} else {
    console.log("NO")
}