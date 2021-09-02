var num = 13
var count=0
for (var i=2; i<num; i++) {
    if (num% i==0) {
        count++
    }
}
if(count==0) {
    console.log("Prime Number")
}
else{
    console.log("Not")
}