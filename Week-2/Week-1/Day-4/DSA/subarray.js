function subarray(arr) {
    var n = arr.length;
    var i = 0, j = i, s = 0;
    while (i < n - 1 && j < n) {
        s += arr[i];
    
    if (s == 0) {
        console.log(i, j);
    }
    else if (j < n - 1) {
        j++
    } else {
        i++;
        j = i;
        s = 0
    }
}}

function runProgram(input) {
    var data = input.trim().split(" ").map(Number);
    subarray(data);
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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