function commonElement(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i]==array2[j]) {
                console.log(array2[j])
            }
        }
    }
}

var array1 = [1, 2, 3, 4]
var array2 = [2, 4, 6, 8]
commonElement(array1, array2)