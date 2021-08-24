// 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들어라.
// 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어라.

const 버스시간 = ["12:30", "13:20", "14:13"];
const 기준시간 = "12:40";

function solution(버스시간, 기준시간) {
    let answer = [];
    기준시간 = 기준시간.split(":").map(n => parseInt(n,10));
    기준시간 = 기준시간[0] * 60 + 기준시간[1];
    for(let i in 버스시간) {
        let time = 버스시간[i].split(":").map(n => parseInt(n,10));
        time = time[0] * 60 + time[1];
        if (time < 기준시간) {
            answer.push('지나갔습니다.');
        } else {
            let 시간 = parseInt((time - 기준시간) / 60, 10);
            let 분 = parseInt((time - 기준시간) % 60, 10)
            answer.push(String(시간).padStart(2, 0) + '분');
        }
    }
    return answer;
}

console.log(solution(버스시간, 기준시간))