var items = ['a', 'b', 'c', 'd', 'a', 'c']
var object ={}
for (let i = 0; i < items.length; i++) {
    object[items[i]]=""
}
console.log(object)