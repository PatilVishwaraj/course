function reverse_cut(str){
  var ans1 = ""
  var ans2 = ""
  var x = (str.length-1)/2
    for (i=0; i<str.length; i++) {
      if (i<x) {
        ans1 = str[i] + ans1
      }
      else if (i==x) {
        ans1 = ans1 + str[i]
      }
      else if (i>x) {
        ans2 = str[i] + ans2
      }
    }
    var ans = ans1 + ans2
  return ans
}
function runProgram(input) {
  console.log(reverse_cut(input))
}

if (process.env.USERNAME === 'PC') {
  runProgram(`abcxyz`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
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