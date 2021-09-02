arr = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"]
ans = []
for(var i=0; i<arr.length; i++) {
    if(arr[i].length>=4) {
        ans.push(arr[i])
    }
}
console.log(ans)
