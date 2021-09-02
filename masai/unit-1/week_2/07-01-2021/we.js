// 1st
var limit = 10
for (var i =1; i <= limit; i++) {
    console.log(i + "Masai School")
}


//2nd
var limit2 = 10
var sum =0 
for (var i =0; i<=limit2; i++) {
    if (i%3 == 0) {
        sum =sum+i
    }
}
console.log(sum)


//3rd
var loop = 3
for (var i = 1; i <= loop; i++) {
    for (var j = 1; j<= i;j++) {
        console.log(i + "." + j)
    }
}


//4th
var score = [29, 12, 9, 38, 90, 18, 30]
var low= score[0]
for(var i =1; i<score.length; i++) {
    if(score[i] < low){
        low = score[i]
    }
}
console.log(low)


//5th
var names = ["vishwaraj", "dhananjay", "suvarna", "vishwas", "priyesh"]
var conso = 0
for(var i=0; i<names.length; i++) {
    var name = names[i]
    for (var j=0; j<name.length; j++) {
       if (!(name[j] == "a" || name[j] == "i" || name[j] == "o" || name[j] == "e" || name[j] == "u" )) {
           conso++
       }
    }
}
console.log(conso)
