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
