// array decleration in ts 
const arr:number[]=[3,4];

const brr:string[]=["mango","apple","sab"]
console.log(brr);

// anotherWay of decelaring a array
const crr:Array<number>=[1,223,2,3,2];
const drr:Array<string>=["asam","Tekho","dekho"];

// array of an array ,2D array

const grr:number[][]=[[1,2,3,3,3],[5,5,6,7,7]]

// Readable array
const redArr: readonly number[]=[1,2,3,4,4,]
// redArr[3]=5

// tuples:- advance version of a array
const tupleArray:[number,string]=[4,"sant"];
// optinal tuple
const otpTuple:[number,string,boolean?]=[2,"amam"]

// named tuple array
const namedTupleArray:[name:string,price:number]=["santos",6];

// readOnlyTupels

const readTuples:readonly[number,string]=[2,"santosn"];
// readTuples[0]=5


// enums:- strict the uers , limited option provided to the user

enum size{
   ACCESS,
   TOKEN,
   LIMITED,
}

const cup=size.TOKEN;
console.log(cup)

// valu assend in enum,automatically increment

enum oper{
    OBJ=100,
    JECRA,
    JJACKES

}
const paray=oper.JECRA
console.log(paray)

// string based enum optian value

 const enum str{
    PICO=123,
    JAM=145,
    TEM=124
}

const s=str.JAM;
console.log(s)
// renadom enum - not good practies not recommended 

enum random{
    JAM=2,
    TAL="Sskam",
}
const btr=random.TAL;

// web-part enum 

enum stri{
    NAME="KAMLA",
    JAM='LAUA',
    TAM="GLUAA",
}

function abc(enu:stri){
    console.log(enu)

}
abc(stri.NAME)





