const bar = (n) => {
    if (n <=1) return;
    bar(n-2);
};

//if n =6 
//6 -> 4 -> 2 -> 0
// time complexity: 0(n/2) because you are halfing the number of recursive calls overall.
//You can remove any multiplicative constance when you have a time complexity, so it's O(n)


