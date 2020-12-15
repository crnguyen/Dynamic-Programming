const foo = (n) => {
    if (n <=1) return;
    foo(n-1);
};

//time complexity: O(n) time - because you have n different function calls
//space complexity: O(n) space - because we have n different function calls before we hit our base case