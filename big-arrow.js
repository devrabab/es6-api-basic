const add = (num1, num2) => num1 + num2;
// const sum = add(22, 11);
// console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
// const result = multiply(2, 4, 3);
// console.log(result);

const fiveTimes = (num) => num * 10;
// const output = fiveTimes(5);
// console.log(output);

const elevenTimes = num => num*5;
// const value = elevenTimes(11);
// console.log(value);

const getName = () => 'Brendon Rodgers';
// const name = getName();
// console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);