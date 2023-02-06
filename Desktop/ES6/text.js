// function Demo(name,age,c1,c2){
//     let msg = "hello sir" +name;
//     let dem = age;
//     cb(msg);
//     cb(dem);
// }

// function Demo1(value){
//     console.log(value);
// }

// function Demo2(value) {
//     console.log(value);
// }
// Demo("steve",25,Demo1,Demo2);


// Callback 



// console.log("hello");
// setTimeout(function str(){
//     console.log("i am str");
// },2000)
// setTimeout(function str2(){
//     console.log("i am str2");
// },1000);
// function Bye(){
//     console.log("Bye");
// }

// Bye();

// Promise -> microtask queue
// console.log("progam done");
// setTimeout(()=>{
//     console.log("i c'm");
// },110)
// Promise.resolve().then((value)=>{
//     console.log("promise output");
// })
// console.log("program ended");


// High Order Functions

// let arr=[1,2,3,4];
// function multiple(arr){
//     return arr*2;
// }
// let result = arr.map(multiple);
// console.log(result);
// let result_filter = result.filter((element)=>{
//     return element%2==0;
// })
// console.log(result_filter);
// let result_reduce=result_filter.reduce((a)=>{
//     console.log(a*2);
//     return a*2;
// })
// console.log(result_reduce);



// polyfill



// let arr = [1,2,3,4,5];
// function mapPolyFill(arr,cb){
//     let newArr = [];
//     for(let i =0;i<arr.length;i++){
//         newArr.push(cb(arr[i]));
//     }
//     return newArr;
// }
// function square(x){
//     return x*x;
// }
// console.log(mapPolyFill(arr,square));


// filter ployfill



// let arr = [1,2,3,4,5,6];
// function filterPolyFill(arr,cb){
//     let newArr = [];
//     for(let i =0;i<arr.length;i++){
//         if(cb(arr[i])){
//             newArr.push(cb(arr[i]));
//         }
//     }
//     return newArr
// }
// function odd(n){
//     if(n%2==1) return n;
// }
// console.log(filterPolyFill(arr,odd));

// result = arr.filter((a)=>{
//     return a%2==0;
// })
// console.log(result);

// // pollyfill of reduce
// let arr=[1,2,3,4,5];

// function polyfill_reduce(arr,cb,inital_value = arr[0]){
//     let acc = inital_value;
//     for(let i =1;i<arr.length;i++){
//         acc = cb(arr[i],acc);
//     }
//     return acc;
// }
// function sum(x,acc){
//     return (x+acc);
// }
// console.log(polyfill_reduce(arr,sum));
 


// rest vs spread



// let arr1 = [1,2,3,4,5];
// arr2 = arr1;
// console.log("before change ",arr1,arr2);
// arr2.push(6);
// console.log("after change ",arr1,arr2);

// const [a,b,...c]=[1,2,3,4,5,6];
// console.log(a,b,c);

// const [d,...e]=[...arr1,arr1];
// console.log(d,e);

// const obj1={
//     a:"1",
//     b:"2",
// }

// let obj2={
//     ...obj1,
// }

// console.log("obj2",obj2);

// obj1.c="10";
// console.log(obj1,obj2);




// Map and Set




// let mapvalue = new Map();
// mapvalue.set('1','2');
// mapvalue.set('1',[3,4]);
// console.log(mapvalue);

// let obj = {
//     name:"anil",
//     age:21,
// }
// console.log(obj);

// mapvalue.forEach(element => {
//     console.log(element);
// });
// let arr = [1,2,3,4]
// let setvalue = new Set();
// setvalue.add('1');
// setvalue.add(1);
// setvalue.add('1');
// setvalue.add([1,2,3,4]);
// setvalue.add([1,2,3,4]);
// setvalue.add(arr);
// setvalue.add(arr)
// console.log(setvalue);

// let str = "nitin";
// name1 = str.split('');
// let set = new Set();
// name1.forEach(element => {
//     set.add(element)
// });
// console.log(set);
// console.log(...str);

// console.log(new Set(...[str]))

// arr = [1,2,3,4,5,6,7,7,8,1,2];
// console.log(new Set(arr));



// classes and objects



// function Car(brand,model,color){
//     this.brand=brand;
//     this.model=model;
//     this.color=color;
// }
// let car = new Car("BMW","X5","black");

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
// let car1 = new Car("BMW","X5","black")
// console.log(car);
// car.model("BMW","X5");
// console.log(car1.info());

class Prson{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showDetails(){
        console.log( `${this.name} ${this.age}`)
    }
}
class personChild extends Prson{
    constructor(){
        super('steve', 21, 22);
    }
    showDetails(){
        console.log("hii");
    }
}
let person = new Prson("ram",15);
// console.log(person.showDetails());

let P = new personChild("anshukl",25)
P.showDetails();