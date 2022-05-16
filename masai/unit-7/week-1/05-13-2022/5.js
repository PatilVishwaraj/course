// The Peak Point
function findPeak(Arr, low, high) {
  let mid = Math.floor((low+high)/2)
  if (Arr[mid]>Arr[mid-1] && Arr[mid]>Arr[mid+1]) {
    return mid
  }
  if (Arr[mid]>Arr[mid-1] && Arr[mid]<Arr[mid+1]) {
    return findPeak(Arr, mid, high)
  }
  if (Arr[mid]<=Arr[mid-1] && Arr[mid]>Arr[mid+1]) {
    return findPeak(Arr, low, mid)
  }

}
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0]
  for (let i = 1; i < test*2; i+=2) {
    let N = +input[i]
    let Arr = input[i+1].trim().split(" ").map(Number)
    console.log(findPeak(Arr, 0, N-1))
  }
  
}
// Ans 1
//     2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3
  10 20 11
  5
  1 3 6 5 4`);
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
