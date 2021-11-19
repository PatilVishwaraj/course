function slide(arr,k){
    var i=0,j=0,sum=0;
    var min=0;
    maxi = min;

    while(j<arr.length){
        sum+=arr[j];
        if(j-i+1<k){
            j++;
        }
        else if(sum==k){
            var maxi = Math.max(maxi,sum);
            sum = sum-arr[i];
            i++;
            j++;
        }
    }
    console.log(sum);
}
function runProgram(input) {

    var data = input.split("\n");
    var test = Number(data[0]);
    for (var i = 1; i <= test; i++) {
        var sk = data[i * 2 - 1].split(" ").map(Number);
        var s = sk[0];
        var k = sk[1];
        var arr = data[i * 2].split(" ").map(Number);
        slide(arr,k);
    }
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`1
5 3
1 2 3 4 5`)} else {
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