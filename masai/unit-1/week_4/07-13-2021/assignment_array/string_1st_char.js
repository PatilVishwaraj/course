function checkEndA(string) {
        return string[0]
}

var array = ["apple", "windows", "ubuntu", "cola", "system"]
var ans = []
array.forEach(function(el) {
        ans.push(checkEndA(el))
})
console.log(ans)