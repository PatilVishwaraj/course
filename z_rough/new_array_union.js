var object = {
    array1: [1, 2, 3, 4],
    array2: [2, 4, 6, 8],
    commonElement: function () {
        var union = []
        for (let i = 0; i < this.array1.length; i++) {
            for (let j = 0; j < this.array2.length; j++) {
                if (this.array1[i]==this.array2[j]) {
                    union.push(this.array2[j])
                }
            }
        }
        console.log(union)
    }
}
object.commonElement()
