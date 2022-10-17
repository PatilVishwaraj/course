// Matrix Prime Check
function isPrime(num) {
  if (num == 1) return false
  if (num == 2) return true
  if (num%2==0) return false
  if (num>1) {
    for (let i = 0; i < num; i++) {
      
      
    }
  } else {
    return false
  }
}


// } else if (num > 1) {
//   for (var i = 2; i < num; i++) {

//     if (num % i !== 0) {
//       return true;
//     } else if (num === i * i) {
//       return false
//     } else {
//       return false;
//     }
//   }
// } else {
//   return false;
// }



function countPrime(Matrix, N, M) {
  let count = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (isPrime(Matrix[i][j])) {
        count++
      }
    }
  }
  return count
}
function runProgram(input) {
  input = input.trim().split("\n");
  let [N, M] = input[0].trim().split(" ").map(Number);
  let Matrix = []
  for (let i = 1; i <=N ; i++) {
    let row = input[i].trim().split(" ").map(Number);
    Matrix.push(row)
  }
  console.log(countPrime(Matrix, N, M))
}
// Ans 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 3
  1 2 3 
  4 5 6
  7 8 9`);
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