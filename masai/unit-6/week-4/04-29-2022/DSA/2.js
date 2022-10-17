// Is Even Sum Possible?
function checkEvenSum(N, Arr) {
  let sum = 0
  let count = 0


  var result = [];
  result.push([]);

  for (var i = 1; i < (1 << array.length); i++) {
    var subset = 0;
    for (var j = 0; j < array.length; j++) {
      if (i & (1 << j))
        subset.push(array[j]);
    }
    result.push(subset);
  }

  return result;


}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i]
    let Arr = input[i+1].trim().split(" ").map(Number)
    console.log(checkEvenSum(N, Arr))
  }
  
}
// Ans No
//     Yes
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  1
  5
  4
  1 2 3 4`);
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
