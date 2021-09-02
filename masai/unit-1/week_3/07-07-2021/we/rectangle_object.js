var rectangle = {
    length: 12,
    breadth: 8,
    area: function () {
        console.log(this.length*this.breadth)
    },
    perimeter: function () {
        console.log((2*this.length)+(2*this.breadth))
    }
}
rectangle.area()
rectangle.perimeter()