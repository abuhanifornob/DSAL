function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // Current element to be inserted
        let j = i - 1;

        // Shift elements of the sorted part to the right to make space for the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    return arr;
}
// Example Usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", array);
console.log("Sorted Array:", insertionSort(array));
// Output: [3, 9, 10, 27, 38, 43, 82]