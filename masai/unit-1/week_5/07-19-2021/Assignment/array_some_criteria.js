var array = [2, 4, 5, 3, 6, 8]
var ans = []
array.forEach(function (el, i) {
    if (i%2!==0) {
        if (el%2!==0) {
        ans.push(el)
        }
    }
})
console.log(ans)