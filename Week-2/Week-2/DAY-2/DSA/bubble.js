function bubble(arr,n){
    for(var i=0; i<n-1;i++){
        for(var j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}


function printResult(arr) {
    var newarr = "";
    for (var i = 0; i < arr.length; i++) {
        newarr += arr[i] + " ";
    }
    return newarr;
}


function runProgram(input) {
 var data = input.split("\n");
 var n = +data[0];
 var arr = data[1].split(" ").map(Number);

 var buble = bubble(arr,n);
 var res = printResult(buble);
 console.log(res);
}
if (process.env.USERNAME === "Shihab") {
    runProgram(`5\n3 5 0 9 8`);
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