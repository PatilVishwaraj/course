function traverseRN(n, matrix) {
  if (n==1) {
    console.log(matrix[0][0])
  }
  else {
  var line1 = []
  var line2 = []
  var line3 = []
  for (let i = 0; i < n; i++) {
    line1.push(matrix[i][0])
    if (i!==0) {
      line2.push(matrix[n-1-i][i])
      line3.push(matrix[i][n-1])
    }
  }
  console.log(line1.join(" "),line2.join(" "),line3.join(" "))
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0]
  let N
  for (let i = 1; i < input.length; i+=N+1) {
    N = +input[i]
    let matrix = []
    for (let j = i+1; j <= i+N; j++) {
      matrix.push(input[j].trim().split(" ").map(Number))
    }
    traverseRN(N, matrix)
  }
}

if (process.env.USERNAME === 'PC' || process.env.USERNAME === `Admin`) {
  runProgram(`1
  5
  1 2 3 4 5
  6 7 8 9 10
  11 12 13 14 15
  16 17 18 19 20
  21 22 23 24 25`);
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