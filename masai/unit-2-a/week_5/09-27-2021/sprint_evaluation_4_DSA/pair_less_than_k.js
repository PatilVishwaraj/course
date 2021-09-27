function findPairLessThanK(n, array, k) {
  var ans = -1
  for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
      var sum = array[i] + array[j]
      if (sum<k && sum>ans) {
        ans =sum
      }
    }
  }
  console.log(ans)
}


function runProgram(input) {
  input = input.trim().split('\n')
  for (let i = 1; i < input.length; i+=3) {
    var n = +input[i]
    var array = input[i+1].trim().split(' ').map(Number)
    var k = +input[i+2]
    findPairLessThanK(n, array, k)
  }
}

if (process.env.USERNAME === `PC`) {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
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
