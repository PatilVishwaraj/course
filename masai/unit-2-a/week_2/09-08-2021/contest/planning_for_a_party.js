var N = 5
var PamID = [2, 7, 9, 4, 4] 
var M = 5
var JimID = [4, 2, 6, 9, 1]

var invite_N = {}
var invite_M = {}
for (let i = 0; i < N; i++) {
    invite_N[PamID[i]]=1
}
for (let i = 0; i < M; i++) {
    invite_M[JimID[i]]=1
}
var A = (Object.keys(invite_N).join(''))
var B = (Object.keys(invite_M).join(''))
if (A==B) {
    console.log('Yes')
} else {
    console.log('No')
}
