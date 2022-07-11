
// (question 6) Create a function that returns an array of the names of 10 of your coursemates
function arrayFromArgs(){
    return Array.prototype.slice.call(arguments);
}
var coursemates = arrayFromArgs('Tunde','Bola','Desire','Deola','Ola','Shola','Queen','Catherine','Yusuf','Jordan')
console.log(coursemates);


//(question 7a)Add an element to the end of this array
let array1 = [1,2,4]
let add3 = array1.push(3)
console.log(add3);
console.log(array1)

// (question 7b) Remove the last element in this array
let array2 = [1,2,3,8]
console.log(array2.pop())
console.log(array2)

// (question 7c) Remove the first element in this array
let array3 = [23.77, 80,45]
console.log(array3.shift())
console.log(array3)

//(question 5) Create a function with a function name printsum() and print the sum of two numbers
function printSum(c,d) {
    return c + d
}

console.log(printSum(5,10));

// (question 4) Create a function with a function name firstFunction() and return the sum of two integers(numbers)
function firstFunction(c,d){
    return c + d
}

let addFunction = firstFunction;
console.log(addFunction(4,7))

// Design a for loop that returns an array of even numbers from 1 to 100

for( let i=2;i<=100;i+=2){
    console.log(i);
}