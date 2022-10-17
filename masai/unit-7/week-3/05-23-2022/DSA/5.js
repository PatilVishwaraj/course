// Generate Permutations


function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var array1 =[]
  Permute(arr, 0);
  function Permute(arr, curr) {
    if (curr == arr.length) {
      array1.push([...arr])
    }
    for (let i = curr; i < arr.length; i++) {
      var temp = arr[i]
      arr[i] = arr[curr]
      arr[curr] = temp
      Permute(arr, curr+1)
      var temp = arr[i]
      arr[i] = arr[curr]
      arr[curr] = temp
    }
  }
  array1.sort()
  array1.forEach(el => {
    console.log(el.join(' '))
  })
}
// Ans 1 2 3 
//     1 3 2 
//     2 1 3 
//     2 3 1 
//     3 1 2 
//     3 2 1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  1 2 3`);
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