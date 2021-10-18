function subarray(arr) {
    var n =arr.length;
    for(let i=0; i<n;i++){
        var res=[];
        for(let j=i; j<n;j++){
            res.push(arr[j]);
            console.log(res);
            var s =0;
            for(var k=0; k<res.length;k++){
                s+=res[k];
            }
            if(s==0){
                console.log(i,j);
            }
        }
    }
}


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