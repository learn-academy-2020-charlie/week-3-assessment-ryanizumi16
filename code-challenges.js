// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

Im LOST


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const onlyOdd = (array) => {
  let newArr = []
  for(let i = 0; i < array.length; i++){
    if (array[i] % 2 !== 0) {
      newArr.push(array[i])
    }
  }
  return newArr
}
console.log(onlyOdd(fullArr2));
//i dont know how to only return the numbers im returning only the odd but im also returning strings


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const midLet = ("") => {
const splitLet = splitLet.split([2])
}
console.log(middleLetters1);

// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

// class sphereArea extends react
//   constructor(props)
//     super(props)





// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
var newArr = []

const sequence = (array) => {
  numbersToAdd1.reduce(function(a, b, i){
    return newArr[i] = a + b; }, 0)
}
