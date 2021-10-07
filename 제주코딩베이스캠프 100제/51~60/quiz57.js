// 0부터 1000까지 1의 개수를 세는 프로그램을 만들어라.

// 1
let count = 0;
for (let i = 0; i <= 1000; i++) {
  let arr = String(i).split("");
  count += arr.filter(ele => ele === '1').length;
}
console.log(count)

// 2
let s = ''
for(let i = 0; i < 1000; i++) {
    s += i;
}
let count2 = 0;
for(let k of s) {
    if(k == '1') {
        count2 ++;
    }
}
console.log(count2);
