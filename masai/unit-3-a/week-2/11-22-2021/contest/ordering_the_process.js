function orderTheProcess(N, arr1, arr_ideal) {
  var count = 0
  while (N>0) {
    if (arr1[0]==arr_ideal[0]) {
      arr1.shift()
      arr_ideal.shift()
      count++
      N--
    } else {
      let temp = arr1.shift()
      arr1.push(temp)
      count++
    }
    // console.log(count, N)
  }
  console.log(count)
}






function runProgram(input) {
  input = input.trim().split('\n')
  var N = +input[0]
  var arr1 = input[1].trim().split(' ').map(Number)
  var arr_ideal = input[2].trim().split(' ').map(Number)
  orderTheProcess(N, arr1, arr_ideal)
  // console.log(N, arr1, arr_ideal)
}

if (process.env.USERNAME === `PC`) {
  runProgram(`3
  3 2 1
  1 3 2`);
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