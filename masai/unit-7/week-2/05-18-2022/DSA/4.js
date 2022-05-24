// Next Greater Element
// function nextGreaterElement(N, Arr) {
//   let stack = [Arr[0]];
//   let Ans = [];
//   for (let i = 1; i < N; i++) {
//     if (stack.length == 0) {
//       stack.push(Arr[i]);
//       continue;
//     }
//     while (stack.length > 0 && Arr[i] > stack[stack.length - 1] ) {
//         Ans.push(Arr[i])
//         stack.pop()
//     }
//     stack.push(Arr[i])
//   }
//   while (stack.length>0) {
//     Ans.push(-1)
//     stack.pop()
//   }
//   console.log(Ans.join(" "))
// }
function nextgreater(N,Arr){
    let stack = [];
    let Ans = [];
  for(var i=N-1;i>=0;i--){
      while((stack.length >0) && (stack[stack.length-1]<=Arr[i])){
          stack.pop();
      }
      if(stack.length==0){
          Ans.push ("-1")
      }
      else{
          Ans.push(stack[stack.length-1])
      }
      stack.push(Arr[i])
  }
  console.log( Ans.reverse().join(" "))
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(" ").map(Number);
    nextgreater(N, Arr);
  }
}
// Ans 3 4 4 -1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
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
