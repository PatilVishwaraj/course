var array = [2, 4, 5, 3, 6, 8]
function checkEven(el, i) {
    var even_i = i%2==0
    var even_el = el%2==0
    return(even_i && even_el)
}
console.log(array.filter(checkEven))