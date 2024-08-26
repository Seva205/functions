// 1. getFullName function.

// let x = myFunction('Sevinc', 'Nazarova');

// function myFunction (a, b) {
//     return a+b;
// }

// 2.get fulAddress function

// let y= functionadres('Baki' , 'Rasuulzade');

// function functionadres(a, b){
//     return a + b;
// } console.log(functionadres);

// 3. grade function

// if (score >= 90 && score <= 100) {
//     console.log('Əla');
// } else if (score >= 50 && score < 90) {
//     console.log('Orta');
// } else if (score >= 0 && score < 50) {
//     console.log('Kəsir');}

// 1--->Print all even numbers from 0 to 10 using a loop.
// for(leti=0,i<=10,i++){
//     if (i%2===0){
//         console.log(i);

//     }
// }

// 2--->Create a multiplication table from 1 to 10 using nested loops.

// const size =10
// for (let i = 1; i <= size; i++) {

//     for (let j = 1; j <= size; j++) {

//         let multiplicate = i * j;
//
//     }}
//     console.log(multiplicate);

// 4--->Sum all numbers in an array using a function.

// function sumArray(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }
// let i = 2;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// 5// Reverse the order of an array using a function.

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);

// 6--->Sort an array from lowest to highest using a sorting function.
// const array1=[1,3,6,9,8,7,5,];
// let sortedArr=num.sortedArr();
// console.log(sortedArr);

// Create a function to filter out negative numbers from an array.
// const array = [1, 5, -4, 6, -8, 9, -10];
// const filtrate = (el) => Number.isInteger(el) && el < 0;
// const negativeNumbers = array.filter(filtrate);
// console.log(negativeNumbers);

// 8--->Write a function to remove all spaces from a string.
// function removeEmptySlots(arr) {
//     return arr.filter(element => element !== undefined);
// }

// const array = [1, 6, , 9, , 10];
// const withoutspaces = removeEmptySlots(array);
// console.log(withoutspaces);

// 9--->Create a function that returns true if a number is divisible by 10.
// const array=[10,12,20,15,66,80];
// function filterMultiplesOf10(arr) {
//     return arr.filter(num => num % 10 === 0);
// }

// console.log(filterMultiplesOf10);

// 10--->Write a function to count the number of vowels in a string.

let sentencetext =
  "The Importance of Education Education is an important issue in one’s life. It is the key to success in the future and to have many opportunities in our life";
let types = [a, e, i, o, u];
let count = 0;
for (let i = 0; i < structuredClone.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  );
  {
    count++;
  }
  return count;
}

console.log("Number of vowels:", vowelCount);
