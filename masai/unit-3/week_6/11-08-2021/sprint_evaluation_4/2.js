function findPossibilities(n, ans, pointer) {

}


function birthday(N, ans, pointer, K) {
    console.log(ans.join(" "));
    if (ans.length==K) {
        console.log(ans.join(" "));
    }
    if (pointer>N) {
      return
    }
    for (let i = pointer; i <= N; i++) {
      ans.push(i)
      findPossibilities(N, ans, i+1)
      ans.pop()
    }
}


function runProgram(input) {
    input = input.trim().split(' ').map(Number)
    var N = +input[0]
    var K = +input[1]
    birthday(N, [], 1, K)
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`4 2`);
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
  