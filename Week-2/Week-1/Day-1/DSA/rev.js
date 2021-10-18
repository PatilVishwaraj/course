// function rev(data){
//     if(data == null || data==""){
//         return data;
//     }
//     var l = data.length;
//     var rchar=[];
//     for(var i=l-1;i>=0;i--){
//         rchar.push(data[i])
//     }
// return rchar.join("");
// }


function rev(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
      }
     return s.join("");
  }

function runProgram(input) {

    var data = input.split("");
    console.log(rev(data));
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`shihab`)} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}