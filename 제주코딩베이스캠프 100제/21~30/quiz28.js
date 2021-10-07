// 2-gram이란 2개의 연속된 요소를 출력하는 방법이다.

// 입력이 주어지면 2-gram으로 출력하는 프로그램을 작성하라.

// 입력: Javascript
// 출력: J a
//       a v
//       v a
//       a s
//       s c
//       c r
//       r i
//       i p
//       p t

const n = prompt();
for(let i = 0; i < n.length-1; i++){
    console.log(n[i], n[i+1]);
}