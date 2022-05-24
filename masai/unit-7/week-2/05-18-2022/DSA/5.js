// Number of Occurences in logn
function key(N, K, Arr){
  var count=0
  for(var i=0;i<N;i++){
      if(Arr[i]===K){
         count++
      }
  }
return count
}
function runProgram(input) {
  input = input.trim().split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number)
  let Arr = input[1].trim().split(" ").map(Number)
  console.log(key(N,K,Arr))
}
// Ans 3
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6 3
  2 3 3 3 6 9`);
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