var m =[
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
]
var sum1=0
for(r=0; r<m.length; r++) {
    for(c=0; c<m[r].length; c++) {
        if (c+r<3) {
            sum1+= m[r][c]
        }
    }
}
console.log(sum1)
