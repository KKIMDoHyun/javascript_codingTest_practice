// a = [1,2,3,4] b = [a,b,c,d] 일때
// [[1,a], [b,2], [3,c], [d,4]]로 출력되도록 하라.

const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

// 1
// map 대신 forEach써도된다. -> 대신 return 대신 c.push([e, b[i]])처럼 추가해줘야한다.
let c = a.map(function(e, i){
  if(i % 2 == 0) {
    return [e, b[i]];
  } else {
    return [b[i], e];
  }
});
console.log(c);

// 2
const result = [];
for (let i = 0; i < a.length; i++) {
  const arr = [];
  if (i % 2 === 0) {
    arr.push(a[i], b[i]);
  } else {
    arr.push(b[i], a[i]);
  }
  result.push(arr);
}
console.log(result);
