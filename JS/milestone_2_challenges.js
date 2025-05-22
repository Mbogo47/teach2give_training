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

  return winner;
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
    for (let i = 1; i < arr.length; i ++){
        if (arr[i].length > word.length) {
            word = arr[i]
        }
    }
    return word
}

console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));


// Challenge 5 : Count Properties
const countProperties = (obj) => {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++
        }
    }
    return count;
}

console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));