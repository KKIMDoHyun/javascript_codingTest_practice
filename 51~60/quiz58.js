// 숫자를 입력 받고 천단위로 콤마(,)를 찍어주세요.

// 1
const n = 10000000;
console.log(n.toLocaleString);

// 2 (재귀)
function comma(s) {
    if(s.length <= 3) {
        return s;
    } else {
        return comma(s.slice(0, s.length-3)) + ',' + s.slice(s.length-3);
    }
}