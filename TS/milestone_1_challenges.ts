// CHALLENGE 1: Return the Sum of Two Numbers
const addition = (num_1: number, num_2: number): number => {
  return num_1 + num_2;
};

console.log(addition(3, 5));
console.log(addition(-6, 9));

//CHALLENGE 2: Convert Minutes into Seconds
const convert = (minutes: number): number => {
    return minutes * 60;
}
console.log(convert(5));
console.log(convert(2));


//CHALLENGE 3: Perimeter of a Rectangle
const findPerimeter = (leng: number, width: number): number => {
    return (leng + width) * 2;
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));

// CHALLENGE 4: CHECK NEGATIVE
const isNegative = (num: number): boolean => {
   return num < 0;
}
console.log(isNegative(-23));
console.log(isNegative(55));

// CHALLENGE 5 : CAN I DRIVE
const canDrive = (p_name: string, age:number) :string => {
    if (age > 18) {
        return `${p_name} is old enough to drive`;
    } else {
        return `${p_name} is not old enough to drive yet`;
    }
};
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));

// CHALLENGE 6 : LARGEST NUMBER
const findLargest = (a: number, b: number, c:number) :number=> {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
};
console.log(findLargest(5, 9, 3));
console.log(findLargest(10, 10, 10));
console.log(findLargest(-1, -5, -3));
