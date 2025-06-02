// Challenge 1: Sum of positives
const sumOfPositives = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
};
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
// Challenge 2 : Find Maximum Value
const findMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
console.log(findMax([3, 7, 2, 9, 5]));
// Challenge 3 : Election Winner
const findWinner = (arr) => {
    let winner = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].votes > winner.votes) {
            winner = arr[i];
        }
    }
    return winner.name;
};
const candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
];
console.log(findWinner(candidates));
// Challenge 4 : Longest Word
const findLongestWord = (arr) => {
    let word = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > word.length) {
            word = arr[i];
        }
    }
    return word;
};
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
// Challenge 5 : Count Properties
const countProperties = (obj) => {
    let count = 0;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            count++;
        }
    }
    return count;
};
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
// Challenge 6: Filter By Length
const filterByLength = (arr, minLength) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
// Challenge 7 : Sum of even numbers
const sumEvenNumbers2 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
};
console.log(sumEvenNumbers2([1, 2, 3, 4, 5, 6]));
// Challenge 8 :  Difference Between Sum of Even and Odd Numbers
const differenceEvenOdd = (arr) => {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        }
        else if (arr[i] % 2 != 0) {
            sumOdd += arr[i];
        }
    }
    return sumEven - sumOdd;
};
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
// Challenge 9:  Count Truthy
const countTruthy = (obj) => {
    let count = 0;
    for (let key in obj) {
        if (obj[key]) {
            count++;
        }
    }
    return count;
};
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
// returns: 2  // "hello" and 42 are truthy
// Challenge 10:  Average of Numbers
const average = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
console.log(average([]));
console.log(average([2, 4, 6, 8]));
// Challenge 11: Linear Search
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};
console.log(linearSearch([5, 3, 7, 1, 4], 7));
console.log(linearSearch([5, 3, 7, 1, 4], 10));
// Challenge 12 : Reverse Linear Search
const reverseLinearSearch = (arr, target) => {
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
};
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));
// Challenge 13 : Linear Search All Indices
const linearSearchAll = (arr, target) => {
    const all = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            all.push(i);
        }
    }
    return all;
};
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));
console.log(linearSearchAll([5, 3, 7, 1, 4], 10)); // returns: [2, 5]
// Challenge 14 : Count Occurrences
const countOccurrences = (arr) => {
    const occurrence = {};
    for (let i = 0; i < arr.length; i++) {
        if (occurrence[arr[i]]) {
            occurrence[arr[i]] += 1;
        }
        else {
            occurrence[arr[i]] = 1;
        }
    }
    return occurrence;
};
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));
// returns: { apple: 3, banana: 2, orange: 1 }
