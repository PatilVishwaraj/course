var special = {
    item: "FireFox",
    reverse: function () {
        var output = ''
        for (let i = 0; i < this.item.length; i++) {
            output = this.item[i] + output
            
        }
        return output
    },
    vowelsCount: function () {
        var count = 0
        var vowels = 'aeiouAEIOU'
        for (let i = 0; i < this.item.length; i++) {
            for (let j = 0; j < vowels.length; j++) {
                if (this.item[i] == vowels[j]) {
                    count++
                    break
                }
            }
        }
        return (count)
    },
    changeCase: function () {
        var lower = 'abcdefghijklmnopqrstuvwxyz'
        var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var output = ''
        for (let i = 0; i < this.item.length; i++) {
            for (let j = 0; j < lower.length; j++) {
                if (this.item[i]== lower[j]) {
                    output += upper[j]
                }
                if (this.item[i]== upper[j]) {
                    output += lower[j]
                }
            }
        }
        return output
    }
}
console.log(special.reverse())
console.log(special.vowelsCount())
console.log(special.changeCase())
