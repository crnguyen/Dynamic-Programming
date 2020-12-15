const lib = () => {
    if (n <= 1) return;
    lib(n-2);
    lib(n-2);
}

//time: O(2^n/2) ->simplified O(2^n)
//from one node to the next it's -2 all the way down to the base case
//height is n/2 because from one level of the tree to the next, we double the number of nodes  

//space: O(n/2) ->simplified O(n)
