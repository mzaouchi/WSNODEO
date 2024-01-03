// console.log('Hello NODE')

// function Sum(a,b){
//     return a + b
// }

// console.log(Sum(2,5))


// var Sum=(a,b)=> a+b

// console.log(Sum(+process.argv[2],+process.argv[3]))

// console.log(process.argv)

const Obj = require('./localmodule')
// const djeja = require('./localmodule')

console.log(Obj.Multi(+process.argv[2],+process.argv[3]))

console.log(Obj.Sous(+process.argv[2],+process.argv[3]))