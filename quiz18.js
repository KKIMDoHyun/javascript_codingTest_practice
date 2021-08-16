// 공백으로 구분하여 세 과목의 평균 점수를 구하시오.

const score = prompt().split(' ');

let sum = 0;

for (let i = 0; i < score.length; i++) {
  sum += parseInt(score[i], 10);
}
console.log(Math.floor(sum / score.length));
