
// type narrowing :- when thier is no confomation of the comming value or return valu 
// use typenarrwing
// typing garding
function getChai(kind:string|number){
  
    if(typeof kind==="string"){
        return `Making ${kind} chai ...`
    }
    return `making number wala ${kind} chai`
}
console.log(getChai(9))

// truth vale ,good pattern of writing a code 

function serveChai(msg?:string){
    if(msg){
        return `message agye hai ${msg} ye hai bath `

    }
    return "messsage nhi  hai bahiwo";
}
console.log(serveChai("kasy hai aplog"))  // ye suggestion arhye hai wahe kamal ki bath hai 

// exhaustic checking :- one variable  is used in multiple place for different value 

function oderChai(size:"medium"|"smale"|"large"|number){
    if(size==="smale"){
        return `ye wal ${size} hai `;
    }
    if(size==="large"|| size==="medium"){
         return  'achha bahr chai hai';
    }
  return `enta chai ban hai ${size}`

}

// instanceof type narrowing , operator to deceed is object is of the same class or not 


class KulhadChai{
    serve(){
     return 'serving a kulhad chai';
    }
}

class Cutting{
    serve(){
        return "cutting chai is ready"
    }
}

function servingclassChai(chai:Cutting|KulhadChai){
  if(chai instanceof KulhadChai){
    return chai.serve()
  }
}

console.log(servingclassChai(new KulhadChai()))


// custmizatied type on objects:-type script has a ghiven a super  power to genrate a custom type 

type ChaiOder={
    type:string
    suger:number
}

// type gards
function isChai(obj:any):obj is ChaiOder{
    return (
        typeof obj==="object" && typeof obj!==null
        && typeof obj.type==="string" && typeof obj.suger==="number"
    )
}


function servinaChai(item:ChaiOder|string)  {
if(isChai(item)){
    return `cahi is type ${item.type} and suger level is ${item.suger}`
}
return `servisng a custom chai ${item}`


}
console.log(servinaChai({type:"masala vahai",suger:2}))


    type MasalChai={type:"MasalChai";spicelevel:number};
    type GingerChai={type:"Ginger";amount:number};      
    type ElachiChai={type:"Elachi";spoys:number};

    type chaicustom = MasalChai|GingerChai|ElachiChai;
    function MakeChai(order:chaicustom){
    
        switch(order.type){
            case "MasalChai":
                return "maslachai"
                break;

             case "Elachi":
                return "elacji";   
                break;

             case "Ginger":
                return "guingg"   
                break;
        }
    }
    const myOrder: GingerChai = {type:"Ginger",amount:3}
  console.log(MakeChai(myOrder))









