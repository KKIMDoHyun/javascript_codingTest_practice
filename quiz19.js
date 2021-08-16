// a, b가 주어지면, a의 b승을 구하시오.

const a = 2;
const b = 6;
// const num = ["2", "6"];
const num = prompt().split(' ');
console.log(a ** b);
console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));