"use strict"; //Treat all the JS code as Newer version

//alert() //we cant use this because we are using the nodejs not the browser

let name = "Sushanth"
let age = 18
let letLoggedIn = false

// number => 2 to power 53
//bigint
//String
// boolean => True/false
// null => standalone value
//Undefined => value did not assigened
// symbol => to find the uniquness

// Objects

// console.log(typeof "sushanth") //it is string
// console.log(typeof undefined) //It is undefined
// console.log(typeof null) //It is a object


// --------------------Type Conversion--------------------

let score = "33abc"
//const {score} = req.body //to recive the requst from the frontend

console.log(typeof score)
let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber); //It is NaN (it is not a number)
// console.log(typeof Nan) //type is undefined

//"33" => 33
// "33abc" => NaN
//true=>1,fasle=>0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//"" => false
//"anyname or value" => true

let Number = 33
let StringNumber = String(Number) //type is String
