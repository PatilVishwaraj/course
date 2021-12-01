function generateSequence(str, ans, curr) {
    if (ans.length > 0) {
      console.log(ans.join(""));
    } else if (curr == str.length) {
      return;
    }
    for (let i = curr; i < str.length; i++) {
      ans.push(str[i]);
      generateSequence(str, ans, i + 1);
      ans.pop();
    }
  }
  


function findWierdSum(N, arr, curr, sum, gretest) {
    if (sum==gretest) {
        
    } else if (condition) {
        
    }
    for (let i = 0; i < N; i++) {
        const element = array[i];
        
    }
}


function runProgram(input) {
    input = input.trim().split('\n')
    var test = +input[0]
    for (let i = 1; i < test*2; i+=2) {
        var N = +input[i]
        var arr = input[i+1].trim().split(' ').map(Number)
        arr.sort((a,b) => a-b)
        var gretest = arr.pop()
        findWierdSum(N, arr, curr, sum, gretest)
    }
  
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`3
    3
    1 2 3
    4
    0 1 2 3
    4
    2 3 6 10`);
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
  