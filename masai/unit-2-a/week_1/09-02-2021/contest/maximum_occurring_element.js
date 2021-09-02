function getKey(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
var N = 5
var A = [ 0, 2, 0, 6, 9 ]
    var bag = {}
    for (let i = 0; i < N; i++) {
      if (bag[A[i]]) {
          bag[A[i]]++
      }
      else {
          bag[A[i]]= 1
      }
    }
    var ans = 0
    for (const key in bag) {
      if (bag[key]>ans) {
        ans = bag[key]
      }
    }
    console.log(getKey(bag,ans))




