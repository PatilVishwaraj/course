function subarray(array, k){
    var wsum =0,high=0;

    for(var low=0; low<array.length;low++){
        while(wsum<k && high<array.length){
            wsum+=array[high];
            high++;
        }
        if(wsum==k){
            console.log(low,high-1);
            return;
        }
        wsum-=array[low]
    }
}


function runProgram(input) {

    var data = input.split("\n");
    var nandk = data[0].split(" ").map(Number);
    var k = +nandk[1];
    var array = data[1].split(" ").map(Number);
    subarray(array, k)
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`6 33
1 4 20 3 10 5`);
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