// 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 한다.
// 예로 정해진 순서가 BAC라면 A 다음 C가 쌓아져야 한다.

// B를 쌓지 않아도 A와 C를 쌓을 수 있다.
// B 다음 블럭이 C가 될 수 있다.

const allBlock = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

function solution(allBlock, rule) {
    let answer = [];
    for (let block of allBlock) {
        answer.push(orderCheck(block, rule));
    }
    return answer;
}

function orderCheck(block, rule) {
    let temp = rule.indexOf(rule[0]);
    for(let b of block) {
        if(rule.includes(b)){
            if(temp > rule.indexOf(b)) {
                return false;
            }
            temp = rule.indexOf(b);
        }
    }
    return true;
}