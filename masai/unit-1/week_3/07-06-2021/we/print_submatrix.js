var arr = [
    [1, 2, 3], 
    [5, 6, 7], 
    [7, 8, 9]
]
var rs = 1, cs = 1,
    re = 2, ce = 2

var sub = []

for (r=rs; r<=re; r++){
    var sub_row = []
    for (c=cs; c<=ce; c++){
        sub_row.push(arr[r][c])
    }
    sub.push(sub_row)
}
console.log(sub)