// CHALLENGE 1: Return the Sum of Two Numbers
var addition = function (num_1, num_2) {
    return num_1 + num_2;
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
var canDrive = function (p_name, age) {
    if (age > 18) {
        return "".concat(p_name, " is old enough to drive");
    }
    else {
        return "".concat(p_name, " is not old enough to drive yet");
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
