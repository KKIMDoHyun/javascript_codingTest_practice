//학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력한느 프로그램 작성

const name = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
let result = {};
let winner = "";

for (let index in name) {
  let val = name[index];
  result[val] = result[val] === undefined ? 1 : (result[val] += 1);
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`)