// De-Structuring in JS (Array, Object)
let arr = [4, 10, 6, 7, 3, 8];

let [...temp] = arr;

arr[0] = 100;
arr[1] = 100;
arr[2] = 100;

console.log(arr) // [100, 100, 100, 7, 3, 8]
console.log(temp) // [4, 10, 6, 7, 3, 8]











