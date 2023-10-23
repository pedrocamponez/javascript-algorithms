// Time Complexity: O(n) Linear search iterates through the array once, making it a straightforward but relatively slower search algorithm. It's suitable for small datasets or unsorted data. Consider using it when the data is not large and simplicity is preferred over speed.

function linearSearch(arr, target) {
    // Iterate through the array elements
    for (let i = 0; i < arr.length; i++) {
        // If the current element matches the target, return its index
        if (arr[i] === target) {
            return i;
        }
    }
    // If the target element is not found, return -1
    return -1;
}

const array = [4, 7, 2, 9, 1, 5];
const target = 2;

// Call the linearSearch function with the array and the target value
const resultIndex = linearSearch(array, target);

// Console.log the results
if (resultIndex !== -1) {
    console.log(`Target ${target} found at index ${resultIndex}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}