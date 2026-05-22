
// union and Any in TS

// const sub:number|string="10"
const sub:number|string=10

// ANY

let customOder:string|undefined;
const order=["1","1","3"];

for( let items of order){
    if(items=="1"){
        customOder=items;
    }
    customOder="2"
}
console.log(customOder)