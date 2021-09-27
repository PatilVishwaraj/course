function sortLH(array) {
  var n = array.length
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (array[j]>array[j+1]) {
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  console.log(array.join(" "))
}

function mergeAndSort(n, array_n, m, array_m) {
  var ans1 = {}
  for (let i = 0; i < n; i++) {
    if (ans1[array_n[i]]) {
    } else {
      ans1[array_n[i]]=1
    }
  }
  for (let j = 0; j < m; j++) {
    if (ans1[array_m[j]]) {
    } else {
      ans1[array_m[j]]=1
    }
  }
  var array2 = Object.keys(ans1).map(Number)
  sortLH(array2)
}

function runProgram(input) {
  input = input.trim().split('\n')
  for (let i = 1; i < input.length; i+=4) {
    var n = +input[i]
    var array_n = input[i+1].trim().split(' ').map(Number)
    var m = +input[i+2]
    var array_m = input[i+3].trim().split(' ').map(Number)
    mergeAndSort(n, array_n, m, array_m)
  }

}

if (process.env.USERNAME === `PC`) {
  runProgram(`1
  4
  1 2 3 -4
  5
  1 2 -3 4 5`);
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
