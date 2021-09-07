var N = 8
var day = Wednesday
var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
for (let i = 0; i < 7; i++) {
    if (day==week[i]) {
        (i+N)%7
    }
}