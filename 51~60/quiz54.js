// 숫자가 공백으로 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하시오.

const stamp = prompt().split(" ");

stamp.sort((a,b)=> {
    return a - b;
})

console.log(solution(stamp));

function solution(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (Number(stamp[i+1]) !== Number(stamp[i]) + 1) {
            return "NO";
        }
    }
    return "YES";
}
