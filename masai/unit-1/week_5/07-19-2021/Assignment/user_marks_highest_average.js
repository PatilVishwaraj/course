var object = {
    Nrupul: [30, 40, 50],
    Prateek: [20, 10, 10],
    Yogesh: [40, 20, 20],
    Aman: [10, 20, 40],
    Albert: [25, 15, 25],
    highest: function () {
        var avrg = 0
        for (const key in this) {
            if (key!=='highest') {
                if ((this[key][0]+this[key][1]+this[key][2])/3>avrg) {
                    avrg = (this[key][0]+this[key][1]+this[key][2])/3
                }
            }
        }
        console.log(avrg)
    }
}
object.highest()