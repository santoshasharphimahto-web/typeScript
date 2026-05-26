// genric makes fn more genrealized ,resualuabilt with differnt data set !!
// genric as a fn
function WraperOfArray<T>(items:T):T[]{
    return T[];
}

console.log(WraperOfArray("hello"))