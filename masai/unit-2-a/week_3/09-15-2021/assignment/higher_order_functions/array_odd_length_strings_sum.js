var array = ["Apple", "Windows", "Linux", "Kindle", "Quiz"]
var ans = 0
array.forEach(el => {
    if (el.length%2!=0) {
        ans += el.length
    }
});
console.log(ans)