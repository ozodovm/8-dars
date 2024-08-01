// 1- misol
// const arr = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// console.log(arr.sort((a, b) => a - b)); 

// 2- misol
// const arr2 = [1, 6, 9, 5, 8, 10, 15];
// const rangeSum = (arr, start, end) => {
//   return arr.slice(start, end + 1).reduce((sum, num) => sum + num, 0);
// };
// console.log(rangeSum(arr2, 2, 5)); []

// 3- misol
// const arr3 = [2, 4, 5, 6, 6, 3, 2, 3, 1];
// const uniqueValues = Array.from(new Set(arr3));
// console.log(uniqueValues);

// 4- misol
// tog'risi hof orqali min va maxni qanday topishni bilmadm, shuning uchun math  va spread metodi yordamida ishladim
// const arr4 = [2, 4, 5, 6, 6, 3, 2, 3, 1];
// const maxVal = Math.max(...arr4);
// const minVal = Math.min(...arr4);
// console.log(maxVal, minVal); 

// 5- misol yoq ekan

// 6- misol
// const reverseArr = (arr) => arr.reverse();
// const arr6 = [1, 2, 3, 4, 5];
// console.log(reverseArr(arr6)); 

// 7- misol
// const arr7 = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// const oddCount = arr7.filter(num => num % 2 != 0).length;
// console.log(oddCount); 

// 8- misol
// const arr = [2, 3, 4, 5, 7];
// const toqIndex = [];
// arr.forEach((value, index) => {
//   if (index % 2 !== 0) {
//     toqIndex.push(value);
//   }
// });
// console.log(toqIndex); 

// 9- misol
// const arr = [83, 91, 3, 44, 35, 69, 71];
// function findMaxOddIndexValue(array) {
//     let max = arr[0];
//     array.forEach((value, index) => {
//         if (index % 2 != 0 && value > max) { 
//             max = value; 
//         }
//     });
//     return max == arr[0] ? null : max;
// }
// console.log(findMaxOddIndexValue(arr));

// 10- misol
// const arr = [2, 1, 3, 8, 4];
// const arrMax = arr.indexOf(Math.max(...arr));
// const arrMin = arr.indexOf(Math.min(...arr));
// if (arrMin < arrMax) {
//     for (let i = arrMin + 1; i < arrMax; i++) {
//         arr[i] = 0;
//     }
// } else {
//     for (let i = arrMax + 1; i < arrMin; i++) {
//         arr[i] = 0;
//     }
// }
// console.log(arr); 

// 11- misol
// function extractOddNumbers(array) {
//     return array.filter(number => number % 2 !== 0);
// }
// const arr = [83, 91, 3, 44, 35, 69, 71, 82, 100, 101];
// const oddNumbers = extractOddNumbers(arr);
// console.log(oddNumbers); 

// 12- misol
// const arr = [22, 3, 5, 6, 3, 2, 3];
// const reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// }
// console.log(reversedArr); 

// 13- misol
// const arr = [3, 5, 6, 3, 2, 3];
// const uniqueArr = [...new Set(arr)];
// const sortedUniqueArr = uniqueArr.sort((a, b) => a - b);
// console.log(sortedUniqueArr); 

// 14- misol
// const arr = [83, 91, 3, 44, 35, 69, 71];
// function findMinEvenIndexValue(array) {
//     let min = array[0];
//     array.forEach((value, index) => {
//         if (index % 2 === 0 && value < min) { 
//             min = value; 
//         }
//     });
//     return min === array[0] ? null : min;
// }
// console.log(findMinEvenIndexValue(arr));

