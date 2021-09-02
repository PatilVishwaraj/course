//1st
var num1 = 32
var i=2, y=0

while (i<num1) {
    var x = num1% i
    if (x==0) {
        y++
    }
    i++
}
if(y==0) {
    console.log("Prime Number")
} 
 else {
console.log("Not")
    i++ 
}
console.log("----")

//2nd
var score = 10
var sum = 0
for (var i =3; i<=score; i += 3) {
    sum =sum+i
}
console.log(sum)
console.log("----")

//3rd
var end1 = 5
var sum_even = 0
var sum_odd = 0
for (var i=0; i<=end1; i++) {
    if (i%2==0){
        sum_even = sum_even+i
    } 
    else {
        sum_odd = sum_odd+i
    }
}
console.log(sum_even)
console.log(sum_odd)
console.log("----")

//4th
var score = [29, 12, 9, 38, 90, 18, 30]
var low= score[0]
var high= score[0]
for(var i =1; i<score.length; i++) {
    if(score[i] < low){
        low = score[i]
    }
    if(score[i] > high){
        high = score[i]
    }
}
console.log(low)
console.log(high)
console.log("----")

//5th
var num2 = 64
var y1=0
for (var j=2; j<num2; j++) {
    var x = num2% j
    if (x==0) {
        y1++
    }
}
if(y1==0) {
    console.log("Prime Number")
}
else{
    console.log("Not")
}
console.log("----")


//6th
var names = ["vishwaraj", "dhananjay", "suvarna", "vishwas", "priyesh"]
var vowel = 0, conso = 0
for(var i=0; i<names.length; i++) {
    var name = names[i]
    for (var j=0; j<name.length; j++) {
       if ((name[j] == "a" || name[j] == "i" || name[j] == "o" || name[j] == "e" || name[j] == "u" )) {
           vowel++
       } else {
            conso++
       }
    }
}
console.log("V -> " + vowel)
console.log("C -> " + conso)
console.log("----")