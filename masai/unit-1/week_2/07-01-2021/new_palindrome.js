var input = "masai"
var ans = ""

for (var i=0; i<input.length; i++) {
   ans = input[i] + ans
}
console.log(ans)
if (ans==input) {
    console.log("YES")
} else {
    console.log("NO")
}