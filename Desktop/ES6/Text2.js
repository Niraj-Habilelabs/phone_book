// class Car{
//     constructor(brand,model,color){
//         this.brand=brand;
//         this.model=model;
//         this.color=color;
//     }
    
//     info(){
//         return (this.brand + ' ' + this.model)
//     }
// }
// let car1 = new Car("BMW","S6","matblack")
// console.log(Car);
// car.model("BMW","S6");
// console.log(car1.info());
class Person{
    constructor(name,ag){
        this.name=name;
        this.ag=ag;
    }
    showDetails(){
        return `${this.name} ${this.ag}`
        console.log( `${this.name} ${this.ag}`)
    }
}
class personChild extends Person{
    constructor(){
        super('steve',21,22);
        super('steve', 21, 22);
    }
    showDetails(){
        console.log("hii");
    }
}
let prson = new personChild();
console.log(person.showDetails());
let prson = new Prson("ram",15);
// console.log(person.showDetails());

let P = new personChild("anshukl",25)
P.showDetails();
 13  
const obj = {a:{b:"c"}};

const {a:{b:other}} = obj;

console.log(other);

// const arr = [1,2,3,4,5];
// const obj = {a:{b:arr}};
// const {a:{b:[a]}} = obj;

// console.log(a);  

const firstPromise = () => new Promise() 