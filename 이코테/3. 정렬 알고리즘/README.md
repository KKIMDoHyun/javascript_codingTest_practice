# 정렬 알고리즘
- 정렬: 데이터를 특정한 기준에 따라 순서대로 나열하는 것
- 정리
![sort](https://user-images.githubusercontent.com/52418706/136930630-cfa1d9b7-0710-435f-9c36-a98b12d0a8f8.PNG)
___
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
- 퀵정렬이 빠른 이유
  - 이상적인 경우 분할이 절반씩 일어난다면 전체 연산 횟수로 O(NlogN)를 기대할 수 있다.
  - 너비 X 높이 = N x logN = NlogN
  - 최악의 경우 O(N^2)의 시간 복잡도를 가진다.
```

```javascript
const arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

function quick_sort(arr, start, end) {
  if(start >= end) {
    return;
  }
  let pivot = start;
  let left = start + 1;
  let right = end;
  while(left <= right) {
    while(left <= end && arr[left] <= arr[pivot]) {
      left += 1;
    }
    while(right > start && arr[right] >= arr[pivot]) {
      right -= 1;
    }
    if(left > right) {
      [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  quick_sort(arr, start, right-1);
  quick_sort(arr, right+1, end);
}

quick_sort(arr, 0, arr.length-1);
console.log(arr)
```
___
### <계수 정렬>
```
- 특정한 조건이 부합할 때만 사용할 수 있지만 매우 빠르게 동작한다.
- 데이터의 개수가 N, 데이터(양수) 중 최댓값이 K일 때, 최악의 경우에도 수행 시간 O(N + K)를 보장한다.
```

```javascript
const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

const count = Array.from({length: arr.length}, (v,i) => 0);

for(let i = 0; i < arr.length; i++) {
  count[arr[i]]++;
}

for(let i = 0; i < count.length; i++) {
  for(let j = 0; j < count[i]; j++) {
    console.log(i);
  }
}
```
___
### <문제 - 두 배열의 원소 교체>
```
동빈이는 두 개의 배열 A와 B를 갖고 있습니다. 두 배열은 N개의 원소로 구성되어 있으며, 배열의 원소는 모두 자연수입니다.
동빈이는 최대 K번의 바꿔치기 연산을 수행할 수 있는데, 바꿔치기 연산이란 배열 A에 있는 원소 하나와 배열 B에 있는 원소 하나를 골라서 두 원소를 서로 바꾸는 것을 말합니다.
동빈이의 최종 목표는 배열 A의 모든 원소의 합이 최대가 되도록 하는 것이며, 여러분은 동빈이를 도와야 합니다.
N, K, 그리고 배열 A와 B의 정보가 주어졌을 때, 최대 K번의 바꿔치기 연산을 수행하여 만들 수 있는 배열 A의 모든 원소의 합의 최댓값을 출력하는 프로그램을 작성하세요.
```
> Tip) 매번 배열 A에서 가장 작은 원소를 골라서, 배열 B에서 가장 큰 원소와 교체해라
```javascript
const A = [1, 2, 5, 4, 3];
const B = [5, 5, 6, 6, 5];
const n = 5, k = 3;

A.sort();
B.sort((a, b) => b-a);

for(let i = 0; i < k; i++){
  if(A[i] < B[i]) {
    [A[i], B[i]] = [B[i], A[i]];
  } else {
    break;
  }
}
const sum = A.reduce((a,b) => a+b);
console.log(sum)  
```
___