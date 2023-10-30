function knapsack(maxWeights, itemValues, knapsackCapacity) {
    // Get the number of items
    const numItems = maxWeights.length;

    // Initialize a 2D array for dynamic programming
    const dp = Array.from({ length: numItems + 1 }, () => Array(knapsackCapacity + 1).fill(0));

    // Iterate through each item
    for (let currentItem = 1; currentItem <= numItems; currentItem++) {
        // Iterate through each possible knapsack capacity
        for (let currentCapacity = 1; currentCapacity <= knapsackCapacity; currentCapacity++) {
            // If the current item can fit into the current capacity
            if (maxWeights[currentItem - 1] <= currentCapacity) {
                // Determine the maximum value with and without the current item
                dp[currentItem][currentCapacity] = Math.max(
                    itemValues[currentItem - 1] + dp[currentItem - 1][currentCapacity - maxWeights[currentItem - 1]],
                    dp[currentItem - 1][currentCapacity]
                );
            } else {
                // If the current item cannot fit, use the previous best value
                dp[currentItem][currentCapacity] = dp[currentItem - 1][currentCapacity];
            }
        }
    }

    // Return the maximum value that can be obtained
    return dp[numItems][knapsackCapacity];
}

// Example Usage:
const weights = [2, 3, 4, 5];  // Weights of the items
const values = [3, 4, 5, 6];   // Values of the items
const capacity = 5;             // Knapsack capacity

const maxValue = knapsack(weights, values, capacity);
console.log("Maximum value:", maxValue);  // Output: 7 (items with weights 2 and 5 are selected)
