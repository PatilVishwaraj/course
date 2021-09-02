function find2ndMax(array) {
    if (array[0] > array[1] && array[1] > array[2]) {
        console.log(array[1])
    }
    else if (array[0] > array[2] && array[2] > array[1]) {
        console.log(array[2])
    }
    else if (array[1] > array[0] && array[0] > array[2]) {
        console.log(array[0])
    }
    else if (array[1] > array[2] && array[2] > array[0]) {
        console.log(array[2])
    }
    else if (array[2] > array[0] && array[0] > array[1]) {
        console.log(array[0])
    }
    else if (array[2] > array[1] && array[1] > array[0]) {
        console.log(array[1])
    }
}

function runProgram(input) {
    var input = input.trim().split(" ").map(Number)
    find2ndMax(input)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3 7 5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  