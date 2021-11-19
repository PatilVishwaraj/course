function removeTwin(arr) {
  var num_bag = {}
  arr.forEach(el => {
    if (num_bag[el]) {
      delete num_bag[el]
    } else {
      num_bag[el] = 1
    }
  });
  console.log(Object.keys(num_bag)[0])
}


function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 2; i < input.length; i+=2) {
      var arr = input[i].trim().split(' ').map(Number);
      // console.log(arr)
      removeTwin(arr)
    }
  }
  
  if (process.env.USERNAME === `Admin`) {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
  