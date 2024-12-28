const secondLargest = (arr) => {
    if (arr.length < 2) return null; // Handle edge cases

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; // Handle cases where no second largest exists
};


console.log(secondLargest([10, 5, 8, 20, 15])); // Output: 15
console.log(secondLargest([5, 5, 5])); // Output: null
console.log(secondLargest([10])); // Output: null