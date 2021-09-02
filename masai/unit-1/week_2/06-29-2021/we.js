// 1st
var a = 4
var b = 5

if (a < b) {
    console.log("A is smaller")
}
else {
    console.log("B is smaller")
}
console.log("-----")


// 2nd 
var pass1 = "Password123"
var pass2 = "password456"

if (pass1 === pass2) {
    console.log ("Welcome user")
}
else {
    console.log ("Wrong Password")
}
console.log("-----")


// 3rd
var num1 = 27
var ans1 = num1 % 2

if (ans1 == 0) {
    console.log("Even Number")
}
else {
    console.log("Odd Number")
}
console.log("-----")


// 4th
var age = 25
if (age > 20 && age < 29) {
    console.log("In Twenties")
}
else {
    console.log("Not in Twenties")
}
console.log("-----")


// 5th
var  ageA =12
var  ageB =15
var  ageC =18

if ( ageA>ageB && ageB>ageC ) {
    console.log("A B C")
}
else if ( ageA>ageC && ageC>ageB ) {
    console.log("A C B")
}
else if ( ageB>ageA && ageA>ageC ) {
    console.log("B A C")
}
else if ( ageB>ageC && ageC>ageA ) {
    console.log("B C A")
}
else if ( ageC>ageA && ageA>ageB ) {
    console.log("C A B")
}
else if ( ageC>ageB && ageB>ageA ) {
    console.log("C B A")
}
console.log("-----")


// 6th 
var c = 13 
var d = 19
c > d ? console.log (c) : console.log(d)
console.log("-----")


// 7th
var day = "Wednesday"
if (day === "Monday") {
    console.log("Mon")
}
else if (day === "Tuesday") {
    console.log("Tue")
}
else if (day === "Wednesday") {
    console.log("Wed")
}
else if (day === "Thursday") {
    console.log("Thu")
}
else if (day === "Friday") {
    console.log("Fri")
}
else if (day === "Saturday") {
    console.log("Sat")
}
else if (day === "Sunday") {
    console.log("Sun")
}
console.log("-----")