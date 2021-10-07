// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성하라.

const nums = prompt();

let sorted = "";
sorted = nums
    .split(" ")
    .sort(function(a, b){
        return a - b;
    })
    .join(" ");

if(nums === sorted) {
    console.log("Yes");
} else {
    console.log("No");
}