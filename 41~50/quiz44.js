// 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 작성하라

// 1
const n = prompt().split("");
let sum = 0;
for(let i = 0; i < n.length; i++) {
  sum += parseInt(n[i],10);
}
console.log(sum)

// 2
const n = prompt();
let sum = 0;

while(n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}
console.log(sum);