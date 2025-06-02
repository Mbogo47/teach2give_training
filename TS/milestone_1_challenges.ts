// CHALLENGE 1: Return the Sum of Two Numbers
const addition = (num1: number, num2: number): number => {
  return num1 + num2;
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
const canDrive = (pName: string, age:number) :string => {
    if (age > 18) {
        return `${pName} is old enough to drive`;
    } else {
        return `${pName} is not old enough to drive yet`;
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


// CHALLENGE 7 : BMI CALCULATOR
const calculateBMI = (kg:number, meters:number): string => {
    if (kg / meters ** 2 < 18.5) {
        let weight = Math.round((kg / meters ** 2) * 10) / 10;
        return `Your weight is ${weight} - Underweight`;

    } else if (kg / meters ** 2 > 18.5 && kg / meters ** 2 < 24.9) {
        let weight = Math.round((kg / meters ** 2) * 10) / 10;
        return `Your weight is ${weight} - Normal Weight`;

    } else if (kg / meters ** 2 > 25 && kg / meters ** 2 < 29.9) {
        let weight = Math.round((kg / meters ** 2) * 10) / 10;
        return `Your weight is ${weight} - Overweight`;

    } else {
        let weight = Math.round((kg / meters ** 2) * 10) / 10;
        return `Your weight is ${weight} - Obese`;
    }
};

console.log(calculateBMI(68, 1.75));
console.log(calculateBMI(85, 1.8));

//CHALLENGE 8 : GREETING BASED ON TIME
const greetUser = (user_name:string, hour:number) : string=> {
    if (hour > 23 || hour < 0) {
       return "Enter Hour between 0 and 23" 
    } else {
        if (hour >= 5 && hour <= 11) {
            return `Good Morning ${user_name}`
        } else if (hour >= 12 && hour <= 17) {
            return `Good Afternoon ${user_name}`
        } else if(hour >= 5 && hour <= 11) {
            return `Good Evening ${user_name}`
        } else {
            return `Good Night ${user_name}`
        }
    }
};

console.log(greetUser("Alice", 24));
console.log(greetUser("Alice", 2));

// CHALLENGE 9: FIZZBUZZ
const fizzBuzzCheck = (num: number): string => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    else if (num % 5 === 0) {
        return "Buzz"
    }
    else if (num % 3 === 0) {
      return "Fizz";
    } else {
      return `${num}`;
    }
};

console.log(fizzBuzzCheck(3)); // "Fizz"
console.log(fizzBuzzCheck(10)); // "Buzz"
console.log(fizzBuzzCheck(15)); // "FizzBuzz"
console.log(fizzBuzzCheck(7)); // "7"

// CHALLENGE 10: PERIMETER 2
const perimeter = (polygon: string, l:number) :string=> { 
    if (polygon == "s") {
        return `${l * 4 }`
    } else {
        return `${6.28 * l}`
    }
}

console.log(perimeter("s", 7)); //28
console.log(perimeter("c", 4)); //25.12

// CHALLENGE 10: PERIMETER 2
const perimeter2 = (polygon: string, l:number) :number=> { 
    if (polygon == "s") {
        return l * 4 
    } else {
        return 6.28 * l
    }
}

console.log(perimeter("s", 7)); //28
console.log(perimeter("c", 4)); //25.12