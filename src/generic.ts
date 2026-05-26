// genric makes fn more genrealized ,resualuabilt with differnt data set !!
// genric as a fn
function WraperOfArray<T>(items:T):T[]{
    return [items];
}

console.log(WraperOfArray("hello"))
console.log(WraperOfArray({name:"santosh"}))

//  paring generick

function pair<A,B>(a:A,b:B):[A,B]{

    return [a,b];

}

console.log(pair("masala",6));
console.log(pair({name:"santosh"},"fcsd"))


// genric as interface  :-  

interface box<T>{
    name:string;
    data:T
}

const tata:box<number>={
    name:"santosh",

    data:34,
}
//    Api responses  

interface apiResponse<T>
{
    name:string,
    data:T;
    
}
const api:apiResponse<{flover:string}>={
name:'santosh',
data:{flover:"adrakKa teast"}
}

console.log(api)
