function runProgram(input) {
    var arr = input.split("\n")
    var series = (arr[1]).split(" "),
    even_sum = 0 , odd_sum = 0

for (var i=0; i<arr[0]; i++) {
    if (series[i]%2==0){
        even_sum += Number(series[i])
    } else {
        odd_sum += Number(series[i])
    }
}
    if (odd_sum>even_sum) {
        console.log("Odd")
    } else {
        console.log("Even")
    }
}

if (process.env.USERNAME === 'PC') {
  runProgram(`5\n2 2 2 3 3`);
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
