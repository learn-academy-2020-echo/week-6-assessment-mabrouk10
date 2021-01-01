// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

const sent = (obj) => {

  //capture the length of the object being passed down in order to use in future loops
  let length = obj.length

  //capture all the "names" in the object
  let arrNames = obj.map(value => value.name)

  //seperate the first and last names 
  let arrCap = arrNames.map(value => value.split(" "))

  //once the first and last names are seperated we can now go in and captalize the first letter.
  let name1 = arrCap.map(value => value[0].charAt(0).toUpperCase() + value[0].slice(1))
  let name2 = arrCap.map(value => value[1].charAt(0).toUpperCase() + value[1].slice(1))

  //once they are captilized we can now join them back together using cocat. now we have a names array that has the first and last names capatilzied
  let names = name1.concat(name2)

  //capture the occupations of the obj and put it into an array
  let occ = obj.map(value => value.occupation)

  //have an empty array ready to push in the first name last name and occupation all together into a sentence. By doing this we can create a sentence with every entry in the object
  let finalArray = []

  for (let i = 0; i < length; i++) {

    // finalArray.push(`"${name1[i]} ${name2[i]} is a ${occ[i]}." `)
    //inside of the for loop we now can compose a sentence using the names and occ array we created earlier that helped isolate the names to captialize and complete the sentence with the occ array we obtained
    finalArray.push(`"${names[i]} is a ${occ[i]}." `)
  }

  //join it all together using join to make a complete sentence
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
  
  //have empty array ready to push into
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    //declaring a variable that can be changed everytime it goes thru loops. this will allow us to store the remainder found with every iteration
    let remainder = 0
    //check to see if the iteration is a number or not. since words and booleans cannot have remainders
    if(typeof arr[i] === 'number'){
    //if the iteration is number we can now use the modulus to find the remainder
    remainder = arr[i] % 3
    // console.log(remainder)
    //once the remainder is found we can now store it into our array
    newArray.push(remainder)
    // return arr[i]
    }
  }
  //return our new array
  return newArray
}

console.log(rem(testingArray1))
console.log(rem(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]


const dup = (arr1, arr2) => {

//First time around in the filter method
//3 will be in position 0
//indexOf will always get the position of the first instance of the array
// then it will compare it to the re-iteration of it
// so the second instant of 3 happens at position 6
// however indexOf 3 is still 0 since indexOf gets the first position of the 3 occurence
// that is why indexOf 3 will not equal to the second instance of 3 which is at 6

  let arr3 = arr2.concat(arr1)
  let arr4 = arr3.filter((value, index) => arr3.indexOf(value) === index)
  return arr4
}
console.log(dup(testingArray4, testingArray3))