//CHALLENGE 1: Return the Sum of Two Numbers
const addition = (num_1, num_2) => num_1 + num_2;
console.log(addition(3, 5));
console.log(addition(-6, 9));

//CHALLENGE 2: Convert Minutes into Seconds
const convert = (minutes) => minutes * 60;
console.log(convert(5));
console.log(convert(2));

//CHALLENGE 3: Perimeter of a Rectangle
const findPerimeter = (leng, width) => (leng + width) * 2;
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));

// CHALLENGE 4: CHECK NEGATIVE
const isNegative = (num) => num < 0;
console.log(isNegative(-23));
console.log(isNegative(55));

// CHALLENGE 5 : CAN I DRIVE
const canDrive = (p_name, age) => {
    if (age > 18) {
        return `${p_name} is old enough to drive`;
    } else {
        return `${p_name} is not old enough to drive yet`;
    }
};
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));


// CHALLENGE 6 : LARGEST NUMBER
const findLargest = (a, b, c) => {
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
const calculateBMI = (kg, meters) => {
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
const greetUser = (user_name, hour) => {
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
const fizzBuzzCheck = (num) => {
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
const perimeter = (polygon, l) => { 
    if (polygon == "s") {
        return `${l * 4 }`
    } else {
        return `${6.28 * l}`
    }
}

console.log(perimeter("s", 7)); //28
console.log(perimeter("c", 4)); //25.12


// CHALLENGE 11 : SUM OF EVEN NUMBERS
const sumEvenNumbers = ( n ) => {
    let total = 0
    for (let i = 0; i <= n; i++){
        if (i % 2 === 0) {
            total += i      
        }  
    }
    return `${total}`;
}

console.log(sumEvenNumbers(6)); // 12  (2 + 4 + 6)
console.log(sumEvenNumbers(10)); // 30  (2 + 4 + 6 + 8 + 10)
console.log(sumEvenNumbers(5)); // 6   (2 + 4)

// CHALLENGE 12: MULTIPLY BY ITSELF
const powerUp = (num, times) => {
    if (times == 0) {
        return "1"
    } else if(num === 0) { 
        return "1"
    } else {
        return `${num ** times}`;
    }
}

console.log(powerUp(2, 3)); // 8  (2 * 2 * 2)
console.log(powerUp(5, 0)); // 1  (anything to the zero power is 1)
console.log(powerUp(3, 4)); // 81 (3 * 3 * 3 * 3)
console.log(powerUp(0)); // 1

// CHALLENGE 13: FACTORIAL CALCULATOR
const factorial = (n) => {
    let fact = 1
    if (n < 0) {
        return "Number must be greater than 0"
    } else if (n == 0) { 
        return "1"
    } else {
        for (let i = 1; i <= n; i++) {
            fact *= i
        }
        return `${fact}`;
    }

}

console.log(factorial(0)); // 1
console.log(factorial(4)); // 24  (1 * 2 * 3 * 4)
console.log(factorial(6)); // 720 (1 * 2 * 3 * 4 * 5 * 6)