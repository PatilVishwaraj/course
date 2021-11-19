function findsum(arr,b){
    var flag=0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == b) {
                console.log(i,j);
                flag = 1;
            }
        }
        if(flag == 1){
            break;
        }
    }
    if(flag==0){
        console.log(-1,-1);
    }
}

function runProgram(input) {

    var data = input.split("\n");
    var test = Number(data[0]);
    for (var i = 1; i <= test; i++) {
        var NandB = data[i * 2 - 1].split(" ").map(Number);
        var b = NandB[1];
        var arr = data[i * 2].split(" ").map(Number);
        findsum(arr,b);
    }
}

if (process.env.USERNAME === "Shihab") {
    runProgram(`1
60 195
1 5 9 13 19 23 28 29 33 40 41 47 49 53 57 62 67 70 73 79 82 84 88 91 95 98 101 104 105 108 113 116 118 121 124 127 130 133 136 140 142 144 148 150 155 156 161 164 165 168 172 176 177 182 184 187 191 193 195 199`);
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