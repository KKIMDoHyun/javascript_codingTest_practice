// 10진수를 2진수로 바꿔라

let dec = prompt("10진수 숫자를 입력하세요.");
let binaryArr = [];

while(dec > 0) {
    binaryArr.push(dec % 2);
    dec = Math.floor(dec / 2);
}

console.log(binaryArr.reverse().join(""))