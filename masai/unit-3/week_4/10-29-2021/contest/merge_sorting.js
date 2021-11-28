// function mergeSort(arr, left, right) {
//   if (left >= right) {
//     return;
//   } else {
//     // Find mid point of array
//     let mid = Math.floor((left + right) / 2);

//     // Sort both arrays separately
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);

//     // Merge sorted arrays
//     merge(arr, left, mid, right);
//   }
// }

function merge(arr, left, mid, right) {
  let i = left
  let j = mid+1
  while (i<mid && j<right) {
    if (arr[i]>arr[j]) {
      


      j++
      i+=2
    } else {
      i++
    }
  }
}



// function merge(arr, left, mid, right) {
//   var N1 = mid - left + 1;
//   var N2 = right - mid;
//   var arr1 = [];
//   var arr2 = [];

//   for (let i = 0; i < N1; i++) {
//     arr1[i] = arr[left + i];
//   }
//   for (let j = 0; j < arr.length; j++) {
//     arr1[j] = arr[mid + j + 1];
//   }
//   var i = 0;
//   var j = 0;
//   var k = left;

//   while (i < N1 && j < N2) {
//     if (arr1[i] >= arr2[j]) {
//       arr[k] = arr1[i];
//       i++;
//     } else {
//       arr[k] = arr2[j];
//       j++;
//     }
//     k++;
//   }

//   while (i < N1) {
//     arr[k] = arr1[i];
//     i++;
//     k++;
//   }

//   while (j < N2) {
//     arr[k] = arr2[j];
//     j++;
//     k++;
//   }
// }

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  mergeSort(arr, 0, n - 1);
  // console.log(arr.join(" "));
}

if (process.env.USERNAME === `Admin`) {
  runProgram(`5
      3 5 0 9 8`);
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
