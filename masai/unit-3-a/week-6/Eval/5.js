var data = {}
function KOddSubset(N, K, arr, ans, pointer) {
  if (ans.length >= K) {
    let target_k = 0;
    // console.log(ans)
    for (let j = 0; j < ans.length; j++) {
      if (ans[j] % 2 == 1) {
        target_k++;
      }
      if (target_k >= K) {
        console.log(ans)
        data[ans.join('')]=1
      }
    }
  }
  if (pointer >= N) {
    return;
  }
  for (let i = pointer; i < N; i++) {
    ans.push(arr[i]);
    KOddSubset(N, K, arr, ans, i + 1);
    ans.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  for (let i = 1; i < test * 2; i += 2) {
    let [N, K] = input[i].trim().split(" ").map(Number);
    let arr = input[i + 1].trim().split(" ").map(Number);
    KOddSubset(N, K, arr, [], 0);
    let result = Object.values(data)
    console.log(result.length);
    data = {}
    // console.log(N, K, arr)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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
