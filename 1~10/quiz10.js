// 별 찍기
// 입력 5

//     *
//    ***
//   *****
//  *******
// *********

let input = 5;
let tree = "";

for (let i = 1; i <= input; i++) {
  for (let j = i; j <= input; j++) {
    tree += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    tree += "*";
  }
  console.log(tree);
  tree = "";
}
