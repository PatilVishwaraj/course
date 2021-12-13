// function mergeSort(arr, low, high) {
//     if (low>=high) {
//         return
//     }
//     mid = Math.floor((low + high)/2)
//     mergeSort(arr, low, mid)
//     mergeSort(arr, mid+1, high)
//     merge(arr, low, mid, high)  
//     console.log(arr)
// }



function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  } else {
    // Find mid point of array
    let mid = Math.floor((left + right) / 2);

    // Sort both arrays separately
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    // Merge sorted arrays
    merge(arr, left, mid, right);
  }
}


function merge(arr, left, mid, right) {
  var N1 = mid - left + 1;
  var N2 = right - mid;
  var arr1 = [];
  var arr2 = [];

  for (let i = 0; i < N1; i++) {
    arr1[i] = arr[left + i];
  }
  for (let j = 0; j < arr.length; j++) {
    arr1[j] = arr[mid + j + 1];
  }
  var i = 0;
  var j = 0;
  var k = left;

  while (i < N1 && j < N2) {
    if (arr1[i] >= arr2[j]) {
      arr[k] = arr1[i];
      i++;
    } else {
      arr[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < N1) {
    arr[k] = arr1[i];
    i++;
    k++;
  }

  while (j < N2) {
    arr[k] = arr2[j];
    j++;
    k++;
  }
}


// function merge(arr, low, mid, high) {
//     let left = []
//     for (let i = low; i < mid; i++) {
//         left.push(arr[i])
//     }
//     let right = []
//     for (let i = mid+1; i < high; i++) {
//         right.push(arr[i])
//     }


//     let i = 0
//     let j = 0
//     let k = low

//     while (i < left.length && j < right.length) {
//         if (left[i] <= right[j]) {
//             arr[k] = left[i]
//             i++
//         } else {
//             arr[k] = right[j]
//             j++
//         }
//         k++
//     }
//     while (i < left.length) {
//         arr[k] = left[i]
//         i++
//         k++
//     }
//     while (j < right.length) {
//         arr[k] = right[j]
//         j++
//         k++
//     }
// }


function runProgram(input) {
    input = input.trim().split('\n')
    let N = +input[0]
    var arr = input[1].trim().split(' ').map(Number)
    mergeSort(arr, 0, N-1)
    console.log(N, arr)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
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
  