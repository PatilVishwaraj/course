function wishes(n, arr) {
    var wish = [0, 0, 0, 0]
    for (let i = 0; i < n; i++) {
        if (arr[i]=="w") {
            wish[0]++
        } else if (arr[i]=="i") {
            wish[1]++
        } else if (arr[i]=="s") {
            wish[2]++
        } else if (arr[i]=="h") {
            wish[3]++
        }
    }
    var ans = wish[0]
    for (let q = 0; q < 4; q++) {
        if (ans>wish[q]) {
            ans=wish[q]
        }
    }
    console.log(ans)
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
        var n = +input[i]
        var arr = input[i+1].trim().split('')
        wishes(n, arr)
    }
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`2
    7
    wishash
    8
    wishwish`);
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
  