// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 한다.

// <pass>에 코드를 작성하라

function one(n) {
    function two(x){
        //pass
        return Math.pow(x, n);
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));