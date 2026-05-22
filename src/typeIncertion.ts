const respone:any="kasye hi"
const strlength:number=(respone as string).length
console.log(strlength)

type book={
name:string
}

let strBooks:string='{"name":"chessge the books"}';
let bookObjects=JSON.parse(strBooks) as book;

// let inputelemt=document.getElementById("username") as HTMLElement;

let value:any;
value=10;
value="we";
value=2.5;

// value.toUpperCase();


let newvalue:unknown;
newvalue=10;
newvalue="we";
newvalue=2.5;

if(typeof newvalue==="string"){
console.log(newvalue.toUpperCase())

}


try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message)
    }
}

type Role = "user"|"admin"|"super"

function rolebasedAcces(role:Role):void{
 
    if(role==="user"){
        console.log("user hai ")
        return 
    }
    if(role==="admin"){
        console.log("admin hai")

        return 
    }
    role;
}
