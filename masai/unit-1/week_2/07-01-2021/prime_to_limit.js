var limit = 100
for (var j=2; j<=limit; j++) {
    var num = j
    var count=0
    for (var i=2; i<num; i++) {
        if (num% i==0) {
            count++
        }
    }
    if (count==0) {
        console.log(num)
    }
}