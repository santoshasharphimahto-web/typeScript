// class  and this 

class chai{

   flavour:string
   price:number
 constructor(flavour:string,price:number){
   this.flavour="masalChai"
   this.price=45
   console.log(this)


 }
 
   oderTea(){
    return this.flavour
   }

}

const AaliCHai=new chai("masalChai",60)
console.log(AaliCHai.flavour)

// Access MOdeier in class 

//private and public

class sercateChai{
    public flover:string;
    private secreateIngredent:string="lemonLeaffe";
    protected ama=100;

    constructor(flover:string){
        this.flover=flover;
        this.secreateIngredent;
    }

    screatReavel(){
        return this.secreateIngredent
    }
    Amamdan(){
        return this.ama
    }

}

const screatFormula=new sercateChai("MangoWlaCHai");
console.log(screatFormula.screatReavel())
console.log(screatFormula.flover)
console.log(screatFormula.Amamdan())

class shop{
    protected shopMenu=100;
}
class shopMkaer extends shop{
    getMaker(){
        return this.shopMenu //okkk
    }
}

const shopMkaerType= new shopMkaer
console.log(shopMkaerType.getMaker())

// static in class 
class taticClass{
    static stacName="ganesh";
    constructor(public flover:string){};

}
console.log(taticClass.stacName)

// #  using for private variable 

class hash{
    #balanece=100;
    constructor(flover:string){}
    accessPrivat(){
        return this.#balanece
    }
}

const privateBalance= new hash("");
console.log(`prive variable ${privateBalance.accessPrivat()} ho gye hai `)


// controll gets way accesssing priveate geter and setter

class controlledGates{
    private _suger=4;
    constructor (){}
    get suger(){
        return this._suger;
    }
    set suger(value:number){
        if(this._suger>6){
             this._suger -3
        }
    }

}

const gate=new controlledGates()
console.log(gate.suger)
// gate.suger(5)

// abstarct  classes only for use 

  abstract class abstractClasses{
    abstract make():void
    abstract done():void

}

class useAbstract extends abstractClasses{
    make(): void {
        console.log("kas ho sulu ")
    }
    done(): void {
        console.log("ho gye bhhii tension matlye bhii");
    }
}


// class compostion :-pointing to other calss 

class Heater{
    heater(){}
}

class compsitionClass{
    
    constructor(private heater:Heater){}
    MakeCompostion(){
        return this.heater.heater
    }

}



