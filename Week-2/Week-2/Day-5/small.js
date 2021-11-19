function runProgram(input){
    var data = input.split("\n");
    var arr = data[1].split(" ").map(Number);
    var f = -1;
    var arrs=[];
    arrs.push(f);
    for(var i=1;i<arr.length;i++){
        for(j=i-1;j>=0;j--){
            if(arr[j]<arr[i]){
                arrs.push(arr[j]);
                break;
            }
        }
        if(j==-1){
            arrs.push(f);
        }
    }
    console.log(arrs.join(" "));
}


if (process.env.USERNAME === "Shihab") {
    runProgram(`8
39 27 11 4 24 32 32 1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
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