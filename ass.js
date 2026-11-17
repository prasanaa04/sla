// Write a function addNumbers(a, b) that accepts two numbers and returns their sum.

function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers(10, 20);

console.log(result);

// Write a function checkEvenOdd(num) that checks whether a given number is even or odd.

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even Number";
    }
    else {
        return "Odd Number";
    }
}

console.log(checkEvenOdd(7));

// Write a function findLargest(a, b, c) that accepts three numbers and returns the largest number.

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    else if (b >= a && b >= c) {
        return b;
    }
    else {
        return c;
    }
}

console.log(findLargest(10, 50, 30));




// Write a function factorial(num) that calculates the factorial of a given number.

function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
}

console.log(factorial(5));

// Write a function that reverses a given string.

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));