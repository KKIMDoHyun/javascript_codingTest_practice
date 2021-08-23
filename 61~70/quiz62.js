// 20190923 출력하기

// 1
const user_s = "aacdddddddddfffffffffgghhh";
let result_s = '';

console.log(
  `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${user_s.match(/h/g).length}`
);

// 2
var n = ["aa","","a","aaaaaaaaa","","aaaaaaaaa","aa","aaa"];
var result = "";

for(var i in n){
    result += n[i].length;
}

console.log(result);