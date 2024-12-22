
function bubbleSort(arr) {
    let n = arr.length;
  
    // Traverse the array
    for (let i = 0; i < n - 1; i++) {
      // Compare adjacent elements
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap if the element is greater than the next
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Test the function
  let arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted Array:", arr);
  
  let sortedArr = bubbleSort(arr);
  console.log("Sorted Array:", sortedArr);