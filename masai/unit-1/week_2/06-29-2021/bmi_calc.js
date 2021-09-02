var wt = 30
if (wt < 18.5) {
    console.log("You're in the underweight range")
}
else if (wt <= 18.5 || wt <= 24.9 ) {
    console.log("You're in the healthy weight range")
}
else if (wt <= 25 || wt <= 29.9 ) {
    console.log("You're in the overweight range")
}
else if (wt <= 30 || wt <= 39.9 ) {
    console.log("You're in the obese range")
}