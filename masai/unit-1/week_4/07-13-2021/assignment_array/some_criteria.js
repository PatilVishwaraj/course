var array = [2, 4, 5, 3, 6, 8]
function even(el,i) {
    var is_even = el%2==0
    var index_even = i%2==0
    if(is_even && index_even){
        return true;
    } else {
        return false;
    }
}
console.log(array.filter(even))