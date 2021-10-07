// 총 몇 명이 놀이기구에 탈 수 있는지 알 수 있는 프로그램을 작성하시오.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 친구들의 수 n이 주어진다.
// 그 다음 차례대로 탑승할 친구들의 무게가 주어진다. 무게는 무작위로 주어진다.

const weightLimit = prompt("무게 제한을 입력하시오.");
const memberCount = prompt("몇명이 탈 계획인가요?");

let count = 0;
let totalWeight = 0;

for(let i = 0; i < memberCount; i++) {
  totalWeight += parseInt(prompt("몸무게를 입력하세요"), 10);
  if(totalWeight <= weightLimit) {
    count++;
  }
}
console.log(totalWeight)