// CHALLENGE 1: Return the Sum of Two Numbers
var addition = function (num1, num2) {
    return num1 + num2;
};
console.log(addition(3, 5));
console.log(addition(-6, 9));
//CHALLENGE 2: Convert Minutes into Seconds
var convert = function (minutes) {
    return minutes * 60;
};
console.log(convert(5));
console.log(convert(2));
//CHALLENGE 3: Perimeter of a Rectangle
var findPerimeter = function (leng, width) {
    return (leng + width) * 2;
};
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
// CHALLENGE 4: CHECK NEGATIVE
var isNegative = function (num) {
    return num < 0;
};
console.log(isNegative(-23));
console.log(isNegative(55));
// CHALLENGE 5 : CAN I DRIVE
var canDrive = function (pName, age) {
    if (age > 18) {
        return "".concat(pName, " is old enough to drive");
    }
    else {
        return "".concat(pName, " is not old enough to drive yet");
    }
};
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));
// CHALLENGE 6 : LARGEST NUMBER
var findLargest = function (a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
};
console.log(findLargest(5, 9, 3));
console.log(findLargest(10, 10, 10));
console.log(findLargest(-1, -5, -3));
// CHALLENGE 7 : BMI CALCULATOR
var calculateBMI = function (kg, meters) {
    if (kg / Math.pow(meters, 2) < 18.5) {
        var weight = Math.round((kg / Math.pow(meters, 2)) * 10) / 10;
        return "Your weight is ".concat(weight, " - Underweight");
    }
    else if (kg / Math.pow(meters, 2) > 18.5 && kg / Math.pow(meters, 2) < 24.9) {
        var weight = Math.round((kg / Math.pow(meters, 2)) * 10) / 10;
        return "Your weight is ".concat(weight, " - Normal Weight");
    }
    else if (kg / Math.pow(meters, 2) > 25 && kg / Math.pow(meters, 2) < 29.9) {
        var weight = Math.round((kg / Math.pow(meters, 2)) * 10) / 10;
        return "Your weight is ".concat(weight, " - Overweight");
    }
    else {
        var weight = Math.round((kg / Math.pow(meters, 2)) * 10) / 10;
        return "Your weight is ".concat(weight, " - Obese");
    }
};
console.log(calculateBMI(68, 1.75));
console.log(calculateBMI(85, 1.8));
//CHALLENGE 8 : GREETING BASED ON TIME
var greetUser = function (user_name, hour) {
    if (hour > 23 || hour < 0) {
        return "Enter Hour between 0 and 23";
    }
    else {
        if (hour >= 5 && hour <= 11) {
            return "Good Morning ".concat(user_name);
        }
        else if (hour >= 12 && hour <= 17) {
            return "Good Afternoon ".concat(user_name);
        }
        else if (hour >= 5 && hour <= 11) {
            return "Good Evening ".concat(user_name);
        }
        else {
            return "Good Night ".concat(user_name);
        }
    }
};
console.log(greetUser("Alice", 24));
console.log(greetUser("Alice", 2));
// CHALLENGE 9: FIZZBUZZ
var fizzBuzzCheck = function (num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    else if (num % 5 === 0) {
        return "Buzz";
    }
    else if (num % 3 === 0) {
        return "Fizz";
    }
    else {
        return "".concat(num);
    }
};
console.log(fizzBuzzCheck(3)); // "Fizz"
console.log(fizzBuzzCheck(10)); // "Buzz"
console.log(fizzBuzzCheck(15)); // "FizzBuzz"
console.log(fizzBuzzCheck(7)); // "7"
// CHALLENGE 10: PERIMETER 2
var perimeter = function (polygon, l) {
    if (polygon == "s") {
        return "".concat(l * 4);
    }
    else {
        return "".concat(6.28 * l);
    }
};
console.log(perimeter("s", 7)); //28
console.log(perimeter("c", 4)); //25.12
// CHALLENGE 10: PERIMETER 2
var perimeter2 = function (polygon, l) {
    if (polygon == "s") {
        return l * 4;
    }
    else {
        return 6.28 * l;
    }
};
console.log(perimeter("s", 7)); //28
console.log(perimeter("c", 4)); //25.12
// CHALLENGE 11 : SUM OF EVEN NUMBERS
var sumEvenNumbers = function (n) {
    var total = 0;
    for (var i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
};
console.log(sumEvenNumbers(6)); // 12  (2 + 4 + 6)
console.log(sumEvenNumbers(10)); // 30  (2 + 4 + 6 + 8 + 10)
console.log(sumEvenNumbers(5)); // 6   (2 + 4)
