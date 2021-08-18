// 2020년 1월 1일은 수요일이다.
// 2020년 a월 b일은 무슨 요일일까요?

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = prompt("월 입력");
const date = prompt("일 입력");

function solution(a, b) {
    const theDay = new Date(`2020-${a}-${b}`);
    console.log(day[theDay.getDay()]);
}

solution(month, date);