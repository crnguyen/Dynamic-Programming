//recursive fibonacci
//time complexity - O(2^n)
//space: O(n)

const fib = (n) => {
    if (n <= 2) return 1; //base case 2 or 1
    return fib(n-1) + fib(n-2);
};

console.log(fib(6)); //6th number in fib sequence
console.log(fib(7));
console.log(fib(8));
