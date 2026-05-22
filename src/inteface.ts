function chai(chau:{type:string;sugae:number,masal:number}){
  console.log(chau)
}
console.log(chai({type:"masalchai",sugae:2,masal:2}))

type chaioder={
    type:string;
    sugae:number;
    masal:number
}
function makeCHai(rol:chaioder){
    console.log(rol.type)
}
console.log(makeCHai({type:"ginger",sugae:2,masal:2}))

type lemonTea={
    water:number;
    milk:number;
}

class teaMaker implements lemonTea{
    water=10;
    milk= 12;
} // some how types gets digest 

// type cupSize= "large"|"medium"|"small";
// class teaSizer implements cupSize{
//     cupSize=medium
// }  class doensot supports this custom types 

// interface 

interface cupSize{
    size:"medium"|"large";

}
class Interfaceclass implements cupSize{
    size: "medium" | "large" ="medium";
} 

const mycup=new Interfaceclass()
console.log(mycup.size)

// another custom types not allowed in class

// type meraChai= {ok:true}|{sucess:false}
// class Response implements meraChai{
//     ok.bollean=true
// }


// mixing of types properties "&"
type wateTes={
    water:number;
}
type lemonTea2={
    milk:number

}

type merewalaChai= wateTes & lemonTea2
const mixerChai :merewalaChai={
    water:20,
    milk:20,
}
console.log(mixerChai)

// option types

type user={
    userName:string;
    bio?:string
}

const u1:user={
    userName :"santosh"
}
const u2:user={
    userName:"helo",
    bio:"sssss"
}

console.log(u1,u2)

// reading only properties in types
type config={
    name:string,
     readonly status:string

}
const app:config={
    name:"sant",
    status:"active"
}
// app.status="deactive" not assiangable 
