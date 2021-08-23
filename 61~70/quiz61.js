// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고자 한다.

const user_s = "aaabbbbcdddd";
let result_s = '';

let s = user_s[0];
let count = 0;

for (let i of user_s) {
  if(i == s) {
    count++;
  } else {
    result_s += s + String(count);
    count = 1;
    s = i;
  }
}
result_s += s + String(count);
console.log(result_s);