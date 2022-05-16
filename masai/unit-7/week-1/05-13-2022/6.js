// Minimum in sorted & rotated array
function findMin(arr, low, high) {
  if (high < low) return arr[0];
  if (high == low) return arr[low];

  let mid =Math.floor((low + high)/2);
  if (mid < high && arr[mid+1] < arr[mid]){
    return arr[mid+1]
  }
  
  if (mid > low && arr[mid] < arr[mid - 1]){
    return arr[mid]
  }

  if (arr[high] > arr[mid]){
    return findMin(arr, low, mid-1)
  }
  
  return findMin(arr, mid+1, high);
}
function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(findMin(arr, 0, N-1));
}
// Ans -1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`);
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






	
	
	function findMin(arr,low,high)
	{
		// This condition is needed to handle the case when array
		// is not rotated at all
		if (high < low)
			return arr[0];
		
		// If there is only one element left
		if (high == low)
			return arr[low];
		
		// Find mid
		let mid =low + Math.floor((high - low)/2); /*(low + high)/2;*/
		
		// Check if element (mid+1) is minimum element. Consider
		// the cases like {3, 4, 5, 1, 2}
		if (mid < high && arr[mid+1] < arr[mid])
			return arr[mid+1];
		
		// Check if mid itself is minimum element
		if (mid > low && arr[mid] < arr[mid - 1])
			return arr[mid];

		// Decide whether we need to go to left half or right half
		if (arr[high] > arr[mid])
			return findMin(arr, low, mid-1);
		
		return findMin(arr, mid+1, high);
	}
