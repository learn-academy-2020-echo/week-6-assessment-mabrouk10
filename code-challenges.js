// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const sent = (obj) => {

  let length = obj.length

  let arrNames = obj.map(value => value.name)
  // let arrCap = []

  // for (let i = 0; i < arrNames.length; i++) {
  //   arrCap.push(arrNames[i].split(" "))
  // }

  let arrCap = arrNames.map(value => value.split(" "))

  let name1 = arrCap.map(value => value[0].charAt(0).toUpperCase() + value[0].slice(1))
  let name2 = arrCap.map(value => value[1].charAt(0).toUpperCase() + value[1].slice(1))

  let names = name1.concat(name2)

  let occ = obj.map(value => value.occupation)

  let finalArray = []

  for (let i = 0; i < length; i++) {
    finalArray.push(`"${name1[i]} ${name2[i]} is a ${occ[i]}." `)
  }

  return finalArray.join("")

  // console.log(arrNames)
  // console.log(arrCap)
  // console.log(name1)
  // console.log(name2)
  // console.log(names)
}

console.log(sent(people))



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


const rem = (arr) => {
  
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    let remainder = 0
    if(typeof arr[i] === 'number'){
    remainder = arr[i] % 3
    // console.log(remainder)
    newArray.push(remainder)
    // return arr[i]
    }
  }
  return newArray
}

console.log(rem(testingArray1))
console.log(rem(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]


const dup = (arr1, arr2) => {

  let arr3 = arr2.concat(arr1)
  let arr4 = arr3.filter((value, index) => arr3.indexOf(value) === index)
  return arr4
}
console.log(dup(testingArray4, testingArray3))