// const name = "Sushanth"
// const repocount = 50

// console.log(`hellow my name is ${name} and my repo count is ${repocount}`);

const gameName = new String("Sushanth-nayak-rss")

// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4) // laste value will not be added
console.log(newString)

const anotherSubString = gameName.slice(-7,4 )
console.log(anotherSubString)

const newStringOne = "   hitesh   ";
console.log(newStringOne.trim())

const url = "https://Sushanth.com/Sushanth%20nayak"

console.log(url.replace('%20','-'))

const words = gameName.split("-")
console.log(words)

// --------------------Numbers and Maths--------------

const score = 100
console.log(score)

const balance = new Number(123)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber = 32.46554

console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


console.log(Math)
console.log(Math.abs(-4))

console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min))