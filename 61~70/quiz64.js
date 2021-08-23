// 정량 N에 정확히 막춰야 움직이는 엘레베이터가 있다.
// 화물은 7kg, 3kg 두가지이고 가장 적게 화물을 옮기고 싶다.

let n = 100;
let count = 0;

while (true) {
  if (n % 7 === 0) {
    count += parseInt(n / 7, 10);
    console.log(count);
    break;
  }
  n -= 3;
  count += 1;
  if (n < 0) {
    console.log(-1);
    break;
  }
}
