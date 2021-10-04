var arr1 = [1, 2]
var ans_arr1 = [] 
arr1.forEach( el => {
    ans_arr1.push(el*el) 
});
console.log(ans_arr1)

var arr2 = [1, 2]
var ans_arr2 = [] 
arr2.forEach(function(el) {
    ans_arr2.push(el*2)
})
console.log(ans_arr2)

var arr3 = [1,2,3]
var odd = arr3.filter(function(el) {
    if (el%2==0) {
        return false
    } else {
        return true
    }
})
console.log(odd)

var arr4 = [2,3,4]
var product = arr4.reduce(function(ac, el){
    return ac * el
},1)
console.log(product)

var arr5 = [1, 2, 3, 4]
var sum_odd = arr5.reduce(function(ac, el){
    if (el % 2 ==1) {
    ac += el
    }
    return ac
},0)
console.log(sum_odd)

var arr6 = [1, 2, 3, 4, 5, 6]
var step1 = arr6.filter(function(el) {
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
