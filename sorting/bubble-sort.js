// Time Complexity for worst case scenario: O(n^2), which means this algorithm is inneficient for large datasets. Rarely used in practice.

function bubbleSort(arr) {
    // Array length into n
    let n = arr.length;
    // Outer loop, so iterates through the entire array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop: iterate from the beginning of the array to the unsorted part
        for (let j = 0; j < n - i - 1; j++) {
            // Checking if the two compared elements are in the correct order, so the correct would be arr[j] < arr[j + 1]. If not, swap them.
            if (arr[j] > arr[j + 1]) {
                // This is where the swap happens
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

unsortedArray = [17, 28, 19, 22, 45, 41, 90, 75];
console.log(unsortedArray)
sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray)