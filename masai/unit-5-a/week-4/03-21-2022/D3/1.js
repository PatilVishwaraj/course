// 
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
  var array = input.split("\n")
  for (let i = 1; i < array.length; i+=n+1) {
      var n = Number(array[i])
      var matrix = []
      for (let j = i+1; j <= i+n; j++) {
          matrix.push(array[j].split(" ").map(Number))
      }
      traverseRN(n, matrix)
  }
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding(`ascii`);
  let read = ``;
  process.stdin.on(`data`, function (input) {
    read += input;
  });
  process.stdin.on(`end`, function () {
    read = read.replace(/\n$/, ``);
    read = read.replace(/\n$/, ``);
    runProgram(read);
  });
  process.on(`SIGINT`, function () {
    read = read.replace(/\n$/, ``);
    runProgram(read);
    process.exit(0);
  });
}
