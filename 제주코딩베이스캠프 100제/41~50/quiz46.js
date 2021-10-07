// 1부터 20까지의 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하시오.

let num_arr = "";

for(let i = 1; i <= 20; i++) {
  num_arr += i
}

let split_arr = num_arr.split("");
let sum = 0;
for (let i = 0; i < split_arr.length; i++) {
  sum += parseInt(split_arr[i], 10)
}
console.log(sum)