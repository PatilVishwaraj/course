// Lifeboats
function noOfBoats(N, K, weights) {
  let end = 0
  let count =0
    for (let i = N-1; i >=end; i--) {
      if (weights[i]<K) {
        let diff = K-weights[i]
        if (diff>=weights[end]) {
          end++
        }
        count++
      } else {
        count++
      }
    }
  console.log(count)
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let [N, K] = input[i].trim().split(" ").map(Number)
    let weights = input[i+1].trim().split(" ").map(Number)
    weights.sort((a, b) => a-b)
    noOfBoats(N, K, weights)
    // console.log(N, K, weights)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  4 5
  3 5 3 4
  4 3
  1 2 2 3`);
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
