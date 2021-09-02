function countCase(el) {
    var count = 0
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < el.length; i++) {
        for (let j = 0; j <=26 ; j++) {
            if (el[i] == uppercase[j]) {
                count++
            }
        }
    }
    return count
}

var array = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"]

var ans = array.reduce(function (ac, el) {
        ac += countCase(el)
        return ac
    },0)
    console.log(ans)