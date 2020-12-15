//recursive fibonacci
//initial time and space complexity
//time complexity - O(2^n)
//space: O(n)

//optimizing the solution
//implement Memoization - store duplicate subproblems
//js object, keys will be the argument to the function, value = return value
//return stored value without having to travel through the tree and cut the number of recursive calls

const fib = (n, memo = {}) => {
    //check for existence within the memo - check if key is inside js object
    if (n in memo) return memo[n];
    if (n <= 2) return 1; //base case 2 or 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};

console.log(fib(6)); //6th number in fib sequence
console.log(fib(50));

//------------
//O(2^n) - not a desirable time complexity
//fib(50) = 2^50 steps

//new time and space complexity
//time: 2n -> simplified O(n) time 
//space: 0(n)











