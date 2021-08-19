// 버블 정렬은 두 인접한 원소를 검사하여 정렬하는 방법이다.
// 빈 칸을 채워서 완성시켜라.

function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++){
        for (/* 빈칸 */let j = 0; j < result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                // 빈칸
                let temp = 0;
                temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

const items = prompt("입력해주세요.").split(' ').map((n) => {
    return parseInt(n, 10);
})

console.log(bubble(items));