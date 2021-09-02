function runProgram(input) {
  var arr = input.split(" ")
  var a = Number(arr[0]), b = Number(arr[2]), c = arr[1],
  output = 0
  if(c=="+") {
    output = a + b
  } else 
  if(c=="-") {
    output = a - b
  } else 
  if(c=="*") {
    output = a * b
  } else 
  if(c=="/") {
    output = a / b
  }
  console.log(output)
}

if (process.env.USERNAME === 'PC') {
  runProgram(`2 + 7`);
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