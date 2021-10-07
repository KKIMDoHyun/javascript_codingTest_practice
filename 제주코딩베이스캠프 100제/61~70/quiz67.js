// 어떤 행사에서 진행된 악수가 총 n번이라 했을 때, 민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
// 악수는 모두 1대 1로 진행된다.
// 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번식 악수를 한다.

// 참가자 == n
// 악수의 수 = n-1 + n-2 + n-3 + ... + 1
// n-1(n)/2

function solution(n) {
    let 사람 = 0;
    let 총악수 = 0;
    let temp = 0;
    while(true) {
        총악수 = parseInt((사람*(사람-1))/2,10);
        if (n < 총악수) {
            break;
        }
        temp = 총악수;
        사람 += 1;
    }
    // 민규가 한 악수의 수
    return [parseInt(n-temp, 10), 사람];
}

const 악수의수 = 59;
console.log(solution(악수의수));