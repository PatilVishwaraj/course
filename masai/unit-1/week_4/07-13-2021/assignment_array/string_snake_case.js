function hypen(el) {
    el = el.split("")
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "
    var lowerCase = "abcdefghijklmnopqrstuvwxyz "
      for (i1=0;i1<el.length; i1++) {
        for (j1=0;j1<27; j1++) {
          if (el[i1]==upperCase[j1]) {
          el[i1]=lowerCase[j1]
        }
      }
    }
    el = el.join("")
    return el
}

var array  = ["apple", "windows", "ubuntu"]
var ans = []
array.forEach(function(el) {
    ans.push(hypen(el))
})
console.log(ans.join('_'))