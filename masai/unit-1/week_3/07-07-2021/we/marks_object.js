var details = {
    data: [],
    average: function() {
        if (this.data.length==0) {
            return null
        }
        var total = 0
        for (i=0; i<this.data.length; i++) {
            total= total + this.data[i].marks
        }
        return total/this.data.length
    },
    minMarks: function() {
        var min =null
        for (i= 0; i<this.data.length; i++) {
            if (min==null || this.data[i].marks<min.marks) {
                min = this.data[i]
            }
        }
        return min
    },
    maxMarks: function() {
        var max =null
        for (i= 0; i<this.data.length; i++) {
            if (max==null || this.data[i].marks>max.marks) {
                max = this.data[i]
            }
        }
        return max
    },
    addMarksData: function(user, score) {
        var mark = {name: user, marks: score}
        this.data.push(mark)
    },
}

var input = ['Nrupul', 10, 'Prateek', 20, 'Aman', 30, 'Albert', 5, 'Yogesh', 15]
for (let i = 0; i < input.length; i+=2) {
    details.addMarksData(input[i], input[i+1])
}

console.log(details.average())
console.log(details.maxMarks())
console.log(details.minMarks())