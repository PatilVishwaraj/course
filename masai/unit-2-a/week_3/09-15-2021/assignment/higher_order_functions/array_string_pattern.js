var array = ["apple", "windows", "ubuntu", "cola", "system"]
var ans =[]
array.forEach(function (el) {
    var n = el.length
    if (el[0]=="a" || el[n-1]=="a") {
        ans.push(el)
    }
});
console.log(ans)