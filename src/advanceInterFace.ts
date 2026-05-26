//interface define a object data or its structured 

interface chai{
    falavour:string;
    price:number;
    sugerlevel:number
}

const oder:chai={
    falavour:"adrak CHAi",
    price:23,
    sugerlevel:3
}

// readeably interfcae  

interface readablyinterface{
    readonly taste:string;
    price:number;
    game:string

}
const gamer:readablyinterface={
    game:"pubg",
    price:23,
    taste:"better"
}

// gamer.taste=10

// interFace as a function  (par:types):<values types> ,parms and return 
interface discountCalculator{
    (price:number):number
}

const applyDiscount:discountCalculator=(p)=>p*3


// interface as a methodes 

interface medthodInterFcae{
    add():void;
    done():void;
    make():void
}
const methodObj:medthodInterFcae={

    done(){
        console.log("ha bhii sab ho gye hai");
    },

add(){
    console.log("add kardho bhii");
},
make(){
    console.log("finall  bangye hai ~~")
}

}

// interface merging lib + custom code  

interface User{
    name:string
}
interface User{
    age:number;
}

const u:User={
    age:34,
    name:"gaanesh",
}

//  another way of mergifiation :- 

interface  a{name:string};
interface b{age:string};
interface c extends a,b {};

const san:c={
    age:"maws",
    name:"lassl"
}
console.log(san)


// inteface as indexcing :- when one propert going tp asain a moo;ltipe time in arr holdin difrent vale 
// [varable Name :type]:value assing type  = [p:string]:number


interface Indexingarray{
    [flavour:string]:number
}
const chaiRating:Indexingarray={
    adrark:23,
    masak:23,

    namkWalaChai:-0,

}