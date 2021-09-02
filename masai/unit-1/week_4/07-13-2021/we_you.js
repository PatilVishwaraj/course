//                       ======
//                       square
//                       ======
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array1.forEach(function(el) {
    console.log(el**2)
})
console.log("=========")
//                       ========
//                        double
//                       ========
var array2 = [1, 2]
var ans = []
array2.forEach(function double(el) {
    ans.push(el*2)
 })
 console.log(ans)
 console.log("=========")
//                       =======
//                         odd
//                       =======
var array3 = [1,2,3]
var odd = array3.filter(function(el) {
    if (el%2==0) {
        return false
    } else {
        return true
    }
})
console.log(odd)
console.log("=========")
//                       =======
//                       product
//                       =======
var array4 = [2,3,4]
var product = array4.reduce(function(ac, el){
    return ac * el
},1)
console.log(product)
console.log("=========")
//                       =======
//                       odd sum
//                       =======
var array5 = [1, 2, 3, 4]
var sum_odd = array5.reduce(function(ac, el){
    if (el % 2 ==1) {
    ac += el
    }
    return ac
},0)
console.log(sum_odd)
console.log("=========")
//                       =======
//            sum of cubes of divisible by 3
//                       =======
var array6 = [1, 2, 3, 4, 5, 6]
var step1 = array6.filter(function(el) {
    if (el%3==0) {
        return true
    } else {
        return false
    }
})
var step2 = []
step1.forEach(function(el) {
    step2.push(el**3)
})

var ans1 = step2.reduce(function(ac, el) {
    ac += el
    return ac
},0)
console.log(ans1)