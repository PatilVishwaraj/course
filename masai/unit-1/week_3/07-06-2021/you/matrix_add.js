  function sumOfMatrix (m1,m2) {
    var sum_matrix  =[]
    for(r=0; r<m1.length; r++) {
        var sum_row = []
        for (c=0; c<m1[0].length; c++) {
            sum_row.push(Number(m1[r][c]) + Number(m2[r][c]))
        }
        sum_matrix.push(sum_row)
    }
      return sum_matrix
  }

  function runProgram(input) {
    var arr = input.split("\n")
    var rc_count = arr[0].split(" ").map(Number)
    var m1r1 = arr[1].split(" ") , m1r2 = arr[2].split(" ")
    var m2r1 = arr[3].split(" ") , m2r2 = arr[4].split(" ")
    var m1 = [m1r1, m1r2], m2 = [m2r1, m2r2]
    var r1 = rc_count[0], c1 = rc_count[1], r2 = rc_count[2], c2 = rc_count[3]
        if (r1 ==r2 && c1==c2) {
          console.log(sumOfMatrix(m1,m2))

        }
    }

  if (process.env.USERNAME === 'PC') {
    runProgram(`2 8 2 8\n1 10 5 9 9 3 5 6\n6 2 8 2 2 6 3 8\n7 2 5 3 4 3 3 2\n7 9 6 8 7 2 9 10`);
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