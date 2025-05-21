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