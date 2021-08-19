// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하라.
const n = "AAABBBcccddd"

let split_n = n.split("")

for(let i = 0; i < split_n.length; i++) {
  if (split_n[i] == split_n[i].toUpperCase()) {
    split_n[i] = split_n[i].toLowerCase();
  } else {
    split_n[i] = split_n[i].toUpperCase();
  }
}

console.log(split_n.join(""))