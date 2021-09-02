var array = ["apple", "windows", "ubuntu"]
var ans = 0
array.forEach(function(el) {
    ans += el.length
})
console.log(ans)