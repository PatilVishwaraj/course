// Faulty Direction
function checkDirection(N, Arr) {
  let vertical = 0
  let horizontal = 0
  for (let i = 0; i < N; i++) {
    if (Arr[i]=="L") {
      horizontal--
    }else if (Arr[i]=="R") {
      horizontal++
    }else if (Arr[i]=="U") {
      vertical++
    }else if (Arr[i]=="D") {
      vertical--
    }
  }
  if (vertical===0 && horizontal===0) {
    return "Yes"    
  } else {
    return "No"    
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i]
    let Arr = input[i+1].trim().split("")
    console.log(checkDirection(N, Arr))
    
  }
  
}
// Ans No
//     Yes
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  RLRUD
  4
  LRUD`);
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
