function checkEndA(string) {
    var n = string.length
    if (string[0]=='a' || string[n-1]=='a') {
        return (string)
    }
}

var array = ["apple", "windows", "ubuntu", "cola", "system"]
var ans = []
array.forEach(function(el) {
    if (checkEndA(el)) {
        ans.push(checkEndA(el))
    }
})
console.log(ans)