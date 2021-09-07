var n = 6
var arr = [ 1, 1, 1, 2, 2, 2 ]
CheckPalindrome(n, arr)

function CheckPalindrome(n, arr) {
    var obj = {}
    for (let i = 0; i < n; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]]=1
        }
    }
    var list = Object.keys(obj)
    var count = 0
    for (let k = 0; k < list.length; k++) {
        if (obj[list[k]]%2!==0) {
            count++
        }
    }
    if (count>1) {
        console.log('NO')
    } else {
        console.log('YES')
    }
}