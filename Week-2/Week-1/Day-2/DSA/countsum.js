function countsum(array,t){
    var cnt=0;
    for(var i=0; i<array.length;i++){
        for(var j=i+1; j<array.length;j++){
            if(array[i]+array[j]==t){
                cnt++;
            }
        }
    }
    console.log(cnt);
}

function runProgram(input) {
    
    var data = input.split("\n");
    var NandT = data[0].split(" ").map(Number);
    var T = +NandT[1];
    var array = data[1].split(" ").map(Number);
    countsum(array,T)
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`5 9
3 0 6 2 7`);
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