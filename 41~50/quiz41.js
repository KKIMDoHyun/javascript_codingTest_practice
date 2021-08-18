// 소수인지 아닌지 판별하는 프로그램 작성
// 소수이면 YES, 소수가 아니면 NO 출력

function isPrime(n) {
    if (n === 1) {
      console.log("NO");
      return false;
    }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          console.log("NO");
          return false;
        }
      }
      console.log("YES");
      return true;
  }
  const prime = prompt();
  isPrime(prime);
  