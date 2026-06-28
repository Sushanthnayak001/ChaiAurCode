 // primitive data type

// 7types

// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// Non primitive(refernce type)
// Arrays, Objects, Functions

// const score = 100

// const id = Symbol('123');
// const anotherid = Symbol('123')
// console.log(id === anotherid)

// const heros = ["Shakthiman", "Naagraj" , "Doga"];

// let myobj = {
//     name: "Sushanth Nayak",
//     age : 22,
// }

// const myfunction = function(){
//     console.log("Hellow world"); 
// }

// console.log(typeof myfunction)

// ----------------memeory--------------------

// Stack (Primitive, Copy) , Heap(Non primitive, refernce)

let userone =  {
   name : "Tharun C R",
   upi : "abc.UPI.com",
}

let usertwo = userone;

usertwo.name = "hemanth";

console.log(userone.name)
 
