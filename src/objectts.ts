// automatic types inferance by typeScript
const newObj={
    name:"santosh",
    level:5,
    status:true
}
// automatic inferance
// // {
//     name:string;
//     level:number;
//     status:boolean;
   
// }

// obeject decelartaion in ts 
let obj:{
    name:string;
    level:number;
    status:boolean;
    kill:number
}
obj={
    name:"santosh",
    level:3,
    status:true,
    kill:3
}

// object decelation in typealies way 

type typealies={
    name:string;
    level:number;
    status:string;
    active:boolean;
    kill?:null;

}

const playerCreation:typealies={
    name:"santisj",
    level:7,
    status:"pro",
    active:true,
    kill:null,

}
console.log(playerCreation);

// ducktyping and stuctulal clone

type user={
    name:string;
    level:number;
}
let u1:user={
    name:"santosh",
    level:3,
}
const gamer={name:"rama",level:3,material:"tith"};
u1=gamer;

console.log(u1)

// spliting data  types in object
type item={name:string;price:number;itemType:string;isAvailable:boolean}
type address={area:string;pinCode:number}

type oderType={
    id:number;
    item:item[];
    address:address[];

}

const oder:oderType={
    id:Math.round(Math.random()*10+1),
    item:[{name:"gulabgamun",price:40,isAvailable:true,itemType:"sweetCategories"}],
   address:[{area:"ujariThikhan",pinCode:843124}]
}

console.log(oder,oder.item[0])



// partial=male all (T) propeties optinal  

type ChaiOder={
    type:string;
    suger:number;
    categoris:string
}

const chaiTypeo=(updates:Partial<ChaiOder>)=>{
    console.log(`chai is beging a pearped: ${updates}`);
}
chaiTypeo({type:"giner chaai",categoris:"switteness"})

type RequiredIngredent={
    type:string;
    suger:number;
    categorie:string;
}

// required keyword :itr make alll (t) compulsarry 

const reqChai=(req:Required<RequiredIngredent>)=>{
    console.log(`all ingredent ${req}`)

}
reqChai({categorie:"adral wqla cahi",suger:2,type:"kadakChai"})

//pick :it pick the selected property from the given types and create a new types

type PickIngredent={

     type:string;
    suger:number;
    categorie:string;
    status:boolean;
}


const pickChai=(finnalyIngedent:Pick<PickIngredent,"type"|"status">)=>{
    console.log(`finally ingredent:${finnalyIngedent}`)
}
pickChai({status:true,type:"adarkW ali"})

// omit keyWord :- it makes the remve the proprties and gives remaning data 


type OmitIngredent={
     type:string;
    suger:number;
    categorie:string;
    status:boolean;
}

const remainChai=(rem:Omit<OmitIngredent,"suger">)=>{
  console.log(`remeaning data is ${rem} `)
}
remainChai({categorie:"adrak Wala chai",type:"adrak",status:false})


