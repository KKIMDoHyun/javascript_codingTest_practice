// 구구단 출력하기

const n = prompt();
let result = "";
for (let i = 1; i <= 9; i++) {
    result += (n*i) + " ";
}