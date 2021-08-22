// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 
// 나머지 빈 부분에는 '='을 채워 넣어주세요.

const s = "2";

const n = 25 + parseInt((s.length/2), 10);


// 왼쪽 채우기
const left = s.padStart(n, '=')

// 오른쪽 채우기
const right = left.padEnd(50, '=');
console.log(right);