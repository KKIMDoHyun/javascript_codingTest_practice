// 어떤 입력이 주어지면 앞 글자만 줄여 출력해라.
const n = prompt().split(" ");
let result = '';
for(let i = 0; i < n.length; i++) {
    result+=n[i][0]
}