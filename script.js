const myArray = [1, 2, 3, 4, 5];

// Anonymous Function & IIFE
console.log("Anonymous Function & IIFE");

// 1. Print odd numbers in an array
(function(arr) {
    console.log("1. Odd Numbers:", arr.filter(num => num % 2 !== 0).join(', '));
})(myArray);

// 2. Convert all the strings to title caps in a string array
(function(stringArr) {
    for (let i in stringArr) {
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1).toLowerCase();
    }
    console.log("2. Title Caps:", stringArr.join(', '));
})(["hello", "world", "javascript"]);

// 3. Sum of all numbers in an array
(function(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    console.log("3. Sum:", sum);
})(myArray);

// 4. Return all the prime numbers in an array
(function(arr) {
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    let primes = arr.filter(num => isPrime(num));
    console.log("4. Prime Numbers:", primes.join(', '));
})(myArray);

// 5. Return all the palindromes in an array
(function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    let palindromes = arr.filter(str => isPalindrome(str));
    console.log("5. Palindromes:", palindromes.join(', '));
})(["level", "hello", "noon"]);

// 6. Return median of two sorted arrays of the same size
(function(arr1, arr2) {
    let merged = [...arr1, ...arr2].sort((a, b) => a - b);
    let length = merged.length;
    let median = (merged[Math.floor((length - 1) / 2)] + merged[Math.ceil((length - 1) / 2)]) / 2;
    console.log("6. Median:", median);
})([1, 3, 5], [2, 4, 6]);

// 7. Remove duplicates from an array
(function(arr) {
    let unique = Array.from(new Set(arr));
    console.log("7. Unique Array:", unique.join(', '));
})(myArray);

// 8. Rotate an array by k times
(function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    console.log("8. Rotated Array:", arr.join(', '));
})(myArray, 2);


// Arrow Functions
console.log("Arrow Functions");

// 1. Print odd numbers in an array
let printOddNumbers = arr => console.log("1. Odd Numbers:", arr.filter(num => num % 2 !== 0).join(', '));
printOddNumbers(myArray);

// 2. Convert all the strings to title caps in a string array
let toTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
console.log("2. Title Caps:", toTitleCaps(["hello", "world", "javascript"]).join(', '));

// 3. Sum of all numbers in an array
let sumArray = arr => console.log("3. Sum:", arr.reduce((acc, val) => acc + val, 0));
sumArray(myArray);

// 4. Return all the prime numbers in an array
let getPrimes = arr => {
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    let primes = arr.filter(num => isPrime(num));
    console.log("4. Prime Numbers:", primes.join(', '));
};
getPrimes(myArray);

// 5. Return all the palindromes in an array
let getPalindromes = arr => {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    let palindromes = arr.filter(str => isPalindrome(str));
    console.log("5. Palindromes:", palindromes.join(', '));
};
getPalindromes(["level", "hello", "noon"]);
