var bill = 250
var dis = bill * 0.1
if (bill > 300) {
    if (dis < 100) {
        console.log("Discount of Rs." + dis + ".")
    }
    else {
        console.log("Discount of Rs.100.")
    }
}
else {
    console.log("No discount.")
}