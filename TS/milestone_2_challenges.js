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
