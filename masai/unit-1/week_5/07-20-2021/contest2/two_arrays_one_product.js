function arrayProduct(n, array1, array2) {
    var prod = 1
    for (let j = 0; j < n; j++) {
        prod= prod * array1[j]
    }
    for (let k = 0; k < n; k++) {
        prod= prod * array2[k]
    }
    console.log(prod)
}

function runProgram(input) {
    var array = input.split("\n")
    var test = Number(array[0])
    for (let i = 1; i <array.length; i+=3) {
        var n = Number(array[i])
        var arr_A = array[i+1].split(" ").map(Number)
        var arr_B = array[i+2].split(" ").map(Number)
        arrayProduct(n, arr_A, arr_B)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`8\n7\n3 3 4 1 4 3 3\n1 1 2 3 3 3 3\n2\n3 4\n4 4\n7\n3 2 1 4 1 2 2\n1 3 4 2 4 2 4\n4\n2 4 2 3\n4 4 1 2\n3\n2 2 1\n3 4 4\n7\n2 3 1 1 4 1 4\n1 2 2 4 3 3 4\n1\n1\n2\n7\n3 2 3 2 3 2 2\n3 1 2 1 3 3 1`);
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