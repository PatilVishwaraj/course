function findGreaterArray(n, array) {
  var stack = []
  var ans = []
  for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
      if (array[i]<array[j]) {
        ans.push(array[j])
        if (stack[stack.length-1]<array[j]) {
          stack.push(array[j])
        }
      }
      console.log(stack)
      console.log(ans)
      console.log("=====")
    }
  }
  ans.push(-1)
  // console.log(ans.join(' '))
}
function runProgram(input) {
  input = input.trim().split('\n')
  for (let i = 1; i < input.length; i+=2) {
    var n = +input[i]
    var array = input[i+1].trim().split(' ').map(Number)
    findGreaterArray(n, array)
  }

}

if (process.env.USERNAME === `PC`) {
  runProgram(`1
  4
  1 3 2 4`);
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
