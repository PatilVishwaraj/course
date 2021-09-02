var triangle = {
    side1: 3,
    hypotenuse: 5,
    side2: function () {
        var s2 = (((this.hypotenuse)**2)-((this.side1)**2))**(1/2)
        console.log(s2)
    }
}
triangle.side2()