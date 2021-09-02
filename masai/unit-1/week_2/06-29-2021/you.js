// 1st
var a = 4
var b = 5

if (a > b) {
    console.log("A is larger")
}
else {
    console.log("B is larger")
}
console.log("-----")


// 2nd
var pass1 = "Password123"
var pass2 = "Password123"

if (pass1 === pass2) {
    console.log ("Valid Password")
}
else {
    console.log ("Wrong Password")
}
console.log("-----")


// 3rd
var num1 = 27
var ans1 = num1 % 2

if (ans1 == 1) {
    console.log("Odd Number")
}
else {
    console.log("Even Number")
}
console.log("-----")


// 4th
var DOB = 2005
var age1 = 2021 - DOB
if (age1 >= 13 && age1 <= 19) {
    console.log("Teenage")
}
if (age1 >= 20 && age1 <= 29) {
    console.log("Twenties")
}
console.log("-----")


// 5th
var  ageA =12
var  ageB =15
var  ageC =18
//ascending
if ( ageA<ageB && ageB<ageC ) {
    console.log("A B C")
}
else if ( ageA<ageC && ageC<ageB ) {
    console.log("A C B")
}
else if ( ageB<ageA && ageA<ageC ) {
    console.log("B A C")
}
else if ( ageB<ageC && ageC<ageA ) {
    console.log("B C A")
}
else if ( ageC<ageA && ageA<ageB ) {
    console.log("C A B")
}
else if ( ageC<ageB && ageB<ageA ) {
    console.log("C B A")}
//desending
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
c === d ? console.log ("Equal") : console.log("Different")
console.log("-----")


// 7th
var month = "August"
if (month === "January") {
    console.log("jan")
}
else if (month === "February") {
    console.log("Feb")
}
else if (month === "March") {
    console.log("Mar")
}
else if (month === "April") {
    console.log("Apr")
}
else if (month === "May") {
    console.log("May")
}
else if (month === "June") {
    console.log("Jun")
}
else if (month === "July") {
    console.log("Jul")
}
else if (month === "August") {
    console.log("Aug")
}
else if (month === "September") {
    console.log("Sept")
}
else if (month === "October") {
    console.log("Oct")
}
else if (month === "November") {
    console.log("Nov")
}
else if (month === "December") {
    console.log("Dec")
}
console.log("-----")