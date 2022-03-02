const numbers = [34, 56, 12, 23, 78];
// console.log(numbers);
// console.log(...numbers);
numbers.push(89);

const max = Math.max(23, 34, 56);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

// console.log(numbers);
const numbers2 = [...numbers, 88];
numbers.push(55);
// console.log(numbers);
// console.log(numbers2);
