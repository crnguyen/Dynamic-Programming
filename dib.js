const dib = (n) => {
    if (n <=1 ) return;
    dib(n-1);
    dib(n-1);
}

//has 2 recursive calls inside the function
//n different nodes
//height of tree - distance from root down to base case

//time complexity: O(2^n) time because to the get the number 
//of nodes on the next level and next level you keep 
//multiplying by 2 for a total of n different times.
//space complex: number of stack depth in this case is n - O(n) space complexity
