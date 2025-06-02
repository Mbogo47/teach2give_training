// Challenge 1: Sum of positives

const sumOfPositives = (arr: number[]):number => {
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
const findMax = (arr:number[]) => {
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

const findWinner = (arr: { name: string; votes: number }[]): string => {
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

const findLongestWord = (arr: string[]): string => {
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
const countProperties = (obj: Record<string, unknown>): number => {
    let count = 0;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          count++;
        }
    }
    return count;
}

console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

// Challenge 6: Filter By Length
const filterByLength = (arr: string[], minLength:number): string[] => {

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minLength) {
      result.push(arr[i])
    }
  }
  return result;
};

console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));

// Challenge 7 : Sum of even numbers
const sumEvenNumbers2 = (arr: number[]) :number => {
  
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i]
    }
  }
  return sum
}

console.log(sumEvenNumbers2([1, 2, 3, 4, 5, 6]));