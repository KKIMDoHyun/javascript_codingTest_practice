// getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환한다.
// 이를 이용하여 현재 연도를 출력하시오.

const theDate = new Date();

console.log(Math.floor(theDate.getTime()/(60*60*24*365*1000)) + 1970);