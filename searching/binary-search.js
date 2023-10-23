// Time Complexity: O(n log n), great usage if combined with quick sort, for an example.

function binarySearch(arr, target) {
    // Initialize the lowest and highest pointers for the search range
    let low = 0;
    let high = arr.length - 1;

    // Keep on searching while the lower point is less or equal the highest point
    while (low <= high) {
        // Get the middle index of the current range
        const mid = Math.floor((low + high) / 2);
        // Get the middle index element
        const guess = arr[mid];

        // If the middle index element is equal to the target, return its index.
        if (guess === target) return mid;
        // If the middle index element is greater than the target, narrow the search to the left half
        if (guess > target) high = mid - 1;
        // If the middle element is smaller than the target, narrow the search to the right half
        else low = mid + 1;
    }

    // If the target element is not found
    return -1;
}

const sortedArray = [1, 5, 7, 12, 17, 25, 30, 65, 90, 101, 105, 200];
const target = 17;

const resultIndex = binarySearch(sortedArray, target);

if (resultIndex !== -1) {
    console.log(`Target ${target} found at index ${resultIndex}`);
} else {
    console.log(`Target ${target} not found in the array`);
}