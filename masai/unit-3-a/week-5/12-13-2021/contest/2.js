function swap(arr, left, right) {
  var temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

function sortIndex(N, arr) {
  let bag = {}
  for (let i = 0; i < N; i++) {
    if (bag[arr[i]]) {
      var temp2 = bag[arr[i]]
      let arra = [temp2, i]

      bag[arr[i]] = arra.join(' ')
    } else {
      bag[arr[i]] = i
    }
  }
  console.log(Object.values(bag).join(' '))
}

function runProgram(input) {
    input = input.trim().split('\n')
    let N = +input[0]
    let arr = input[1].trim().split(' ').map(Number)
    sortIndex(N, arr)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`5
    4 5 3 7 1`);
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
  