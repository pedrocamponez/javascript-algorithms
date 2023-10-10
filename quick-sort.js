// Time Complexity at worst case scenario, if the input data is sorted or nearly sorted, is O(n^2), but normally it is O(n log n). Often used in practice.

function quickSort(arr) {
    // Array with 1 or 0 elements is already sorted, so return it
    if (arr.length <= 1) return arr;

    // Choosing the first element as the pivot, and declaring left and right variables
    const pivot = arr[0];
    const left = [];
    const right = [];

    // Separating the array into elements smaller than the pivot (left) and larger than the pivot (right)
    for (let i = 1; i < arr.length; i++) {
        // If element is smaller than pivot, left.push, else, right.push
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    // Recursively sort the left and right arrays and concatenate them with the pivot in between
    return quickSort(left).concat(pivot, quickSort(right));
}

const unsortedArray = [8, 2, 36, 17, 90, 58]
console.log(unsortedArray)
const sortedArray = quickSort(unsortedArray)
console.log(sortedArray)