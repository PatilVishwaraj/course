function findCommon(n, arr1, arr2) {
    var count = 0
    var bag1 = {}
    var bag2 = {}
    for (let i = 0; i < n; i++) {
        if (bag1[arr1[i]]) {
            bag1[arr1[i]]++
        } else {
            bag1[arr1[i]]=1
        }
        if (bag2[arr2[i]]) {
            bag2[arr2[i]]++
        } else {
            bag2[arr2[i]]=1
        }
    }
    arr1 = Object.keys(bag1) 
    arr2 = Object.keys(bag2)
    var x = arr1.length
    var y = arr2.length
    var j = 0
    var k = 0
    while (j<x && k<y) {
        if (arr1[j]==arr2[k]) {
            if (bag1[arr1[j]]<bag2[arr2[k]]) {
                count+=bag1[arr1[j]]
            } else {
                count+=bag2[arr2[k]]
            }
            j++
            k++
        } else if (arr1[j]<arr2[k]) {
            j++
        } else if (arr1[j]>arr2[k]) {
            k++
        }
    }
    console.log(count)
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=3) {
        var n = +input[i]
        var arr1 = input[i+1].trim().split(' ').map(Number)
        var arr2 = input[i+2].trim().split(' ').map(Number)
        findCommon(n, arr1, arr2)
    }
  
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`1
    8
    1 2 3 5 8 8 9 9
    8 8 6 5 3 2 1 1`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding(`ascii`);
    let read = ``;
    process.stdin.on(`data`, function (input) {
      read += input;
    });
    process.stdin.on(`end`, function () {
      read = read.replace(/\n$/, ``);
      read = read.replace(/\n$/, ``);
      runProgram(read);
    });
    process.on(`SIGINT`, function () {
      read = read.replace(/\n$/, ``);
      runProgram(read);
      process.exit(0);
    });
  }
  