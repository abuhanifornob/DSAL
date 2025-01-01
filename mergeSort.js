function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: single element is already sorted
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and push the smaller one
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from the left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add remaining elements from the right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Example Usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", array);
console.log("Sorted Array:", mergeSort(array));
// Output: [3, 9, 10, 27, 38, 43, 82]