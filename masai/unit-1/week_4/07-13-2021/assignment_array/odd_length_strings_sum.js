var array = ["Apple", "Windows", "Linux", "Kindle", "Quiz"]
var ans = 0
    array.forEach(function oddLength(el) {
        if (el.length%2!==0) {
            ans += el.length
        }
    })
    console.log(ans)