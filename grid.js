// say that you are a traveler on a 2D CanvasGradient. you begin 
// in the top-left corner and your goal is to travel to the bottom right
// corner. you may only move down or right.
// in how many ways can you travel to the goal on
// a grid with dimensions m* n?

//write a function gridtraveler(m,n) that calculates this
//gridTraveler(2,3) -> 3

//gridTraveler(3,3) -> ?

//recursive
const gridTraveler = (m,n, memo = {}) => {
    const key = m + "," + n;
    if (key in memo) return memo[key]; //checks if key exists in memo
    if (m === 1 && n === 1) return 1; //base
    if (m === 1 || n === 1) return 0; //base
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo); 
    return memo[key];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(5, 7));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(18, 18));

//total possible number of nodes = m * n 
//time complexity = O(m * n)
//space complexity = O(m + n)