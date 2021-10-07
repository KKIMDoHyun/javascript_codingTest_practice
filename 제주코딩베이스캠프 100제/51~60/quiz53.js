// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')'와 같은 것을 말한다.
// 그 중 괄호의 모양이 바르게 구성 된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자.
// 주어진 문자열이 바른 문자열이면 YES를, 아니면 NO를 출력하자.

// 1
const n = prompt().split("");
let count = 0;
for (let i = 0; i < n.length; i++) {
    if (n[i] === '(') {
        count++;
    } else {
        count--;
    }
    if (count < 0) {
        break;
    }
}
if (count != 0 || count < 0) {
    console.log("NO")
} else {
    console.log("YES")
}

// 2
const n = prompt().split("");

function mathBracket() {
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] == '(') {
            count++;
        } else {
            count--;
        }
    }
    if(count != 0) {
        return false;
    };

    let bracket = [];
    for (let i in arr) {
        if(arr[i] === '(') {
            bracket.push('(')
        } else {
            if(bracket.length === 0) {
                return false;
            }
            bracket.pop()
        }
        return true;
    }
}
