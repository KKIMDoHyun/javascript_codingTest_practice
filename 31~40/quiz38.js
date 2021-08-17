// 1위부터 3위까지 상으로 사탕을 준다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하시오.

// 강의 방식
const scores = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
scores.sort(function (a, b) {
  return a - b;
});

let top3 = [];
let count = 0;

while (top3.length < 3) {
  let value = scores.pop();
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count++;
}

console.log(count);

// 내 방식
const scores = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
scores.sort(function (a, b) {
  return b - a;
});

let arr = [];
let obj = {};
let count = 0;

for (let index in scores) {
  let val = scores[index];
  obj[val] = obj[val] === undefined ? 1 : (obj[val] += 1);
}

const top3 = Object.keys(obj)
              .sort((a,b)=> b-a)
              .slice(0, 3);

for (let i = 0; i < 3; i++) {
  count += obj[top3[i]]
}
console.log(count)