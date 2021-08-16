// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const num = prompt().split(" ");
const a = parseInt(num[0], 10);
const b = parseInt(num[1], 10);
console.log(Math.floor(a / b), Math.floor(a % b));