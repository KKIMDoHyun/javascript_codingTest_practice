# 정렬 알고리즘
- 정렬: 데이터를 특정한 기준에 따라 순서대로 나열하는 것

### <선택 정렬>
```
- 선택정렬은 N번 만큼 가장 작은 수를 찾아서 맨 앞으로 보낸다.
- 구현 방식에 따라서 사소한 오차는 있을 수 있지만, 전체 연산 횟수는 다음과 같다.
    - N + (N - 1) + (N - 2) + ... + 2
- 이는 (N^2 + N - 2) / 2 로 표현할 수 있고, 빅오 표기법에 따라 O(N^2)라고 작성한다.
```

```javascript
const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
let min_index = 0;
let temp = 0;
for(let i = 0; i < arr.length; i++) {
    let min_index = i;
    for(let j = i+1; j < arr.length; j++) {
        if(arr[min_index] > arr[j]) {
            min_index = j;
        }
    }
    [arr[min_index], arr[i]] = [arr[i], arr[min_index]];
    // temp = arr[min_index];
    // arr[min_index] = arr[i];
    // arr[i] = temp;
}
console.log(arr);
```
___
### <삽입 정렬>
```
- 삽입 정렬의 시간 복잡도는 O(N^2)이며, 선택 정렬과 마찬가지로 반복문이 두 번 중첩된다.
- 삽입 정렬은 현재 리스트의 데이터가 거의 정렬되어 있는 상태라면 매우 빠르게 동작한다.
    - 최선의 경우 O(N)의 시간 복잡도를 가진다.
```

```javascript
const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    } else {
      break;
    }
  }
}
console.log(arr);
}
```
___
### <퀵 정렬>
```

```

```javascript

```
___