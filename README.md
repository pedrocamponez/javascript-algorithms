# javascript-algorithms

This repository was created with the purpose of showcasing some algorithm structures and what they are actually used for, in terms of Time Complexity.

# 1 - Sorting Algorithms
Demonstrating the implementation and usage of two fundamental sorting algorithms: Bubble Sort and Quick Sort. These algorithms serve as classic examples of sorting techniques, each with its own unique approach to ordering elements within an array.

## Bubble Sort:
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the entire list is sorted. While Bubble Sort is not the most efficient algorithm for large datasets, it is a fundamental concept to understand and serves as a good starting point for learning about sorting algorithms.

### How Bubble Sort Works:
Compare adjacent elements in the array.
Swap them if they are in the wrong order.
Repeat the process until the entire array is sorted.

## Quick Sort:
Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. Quick Sort's average-case time complexity makes it a popular choice for sorting large datasets.

### How Quick Sort Works:
Choose a 'pivot' element from the array.
Partition the other elements into two sub-arrays: elements less than the pivot and elements greater than the pivot.
Recursively sort the sub-arrays and concatenate them around the pivot.

### Usage:
Feel free to explore the provided code examples and try out different input arrays to see how these sorting algorithms function in action. Understanding the mechanics of Bubble Sort and Quick Sort can provide valuable insights into fundamental sorting concepts and prepare you for more advanced sorting algorithms.

# 2 - Searching Algorithms
Demonstrating the implementation and usage of two essential searching algorithms: Linear Search and Binary Search. Understanding these algorithms is crucial for grasping fundamental concepts in data searching and retrieval.

## Linear Search:
Linear Search is a straightforward search algorithm that iterates over the elements of an array one by one until it finds the desired element. It is a basic and intuitive method for searching in small datasets. Linear Search has a linear time complexity, making it suitable for simple applications where efficiency is not a primary concern.

### How Linear Search Works:
Iterate through the array elements one by one.
Compare the current element with the target element.
If a match is found, return the index of the element.
If the end of the array is reached without finding the target element, return a specified value (e.g., -1) to indicate the element is not in the array.

## Binary Search:
Binary Search is a highly efficient search algorithm applicable to sorted datasets. It reduces the search space in half with each comparison, making it significantly faster than Linear Search for large datasets. Binary Search's logarithmic time complexity makes it a preferred choice when dealing with extensive and sorted data.

### How Binary Search Works:
Compare the target element with the middle element of the sorted array.
If they match, the search is successful; return the index of the middle element.
If the target element is less than the middle element, repeat the search in the left half of the array.
If the target element is greater, repeat the search in the right half of the array.
Continue the process until the target element is found, or the search space is empty.

### Usage:
Explore the provided code examples to understand the implementation of Linear Search and Binary Search. Try different input arrays to observe how these algorithms perform in action. Gaining insights into Linear Search and Binary Search will enhance your understanding of basic searching concepts and prepare you for more complex search algorithms. Happy coding!