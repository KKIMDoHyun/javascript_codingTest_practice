# 이진 탐색 알고리즘
- <strong>순차 탐색: </strong> 리스트 안에 있는 특정한 데이터를 찾기 위해 앞에서부터 데이터를 하나씩 확인하는 방법
- <strong>이진 탐색: </strong> 정렬되어 있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 방법  
- <strong>파라메트릭 서치: </strong> 최적화 문제를 결정 문제('예' 혹은 '아니오')로 바꾸어 해결하는 기법 
___
### <이진 탐색>
```
- 이진 탐색은 시작점, 끝점, 중간점을 이용하여 탐색 범위를 설정합니다.
    - 단계마다 탐색 범위를 2로 나누는 것과 동일하므로 
      연산 횟수는 log_2(N)에 비례한다.
    - 시간 복잡도는 O(log(N))을 보장한다.    
```
#### 재귀 이용
```javascript
const n = 10;
const target = 7;

function binary_search(arr, target, start, end) {
  if(start > end) {
    return 'None';
  }
  let mid = Math.floor((start + end) / 2);
  if(arr[mid] === target) {
    return mid;
  } else if(arr[mid] > target) {
    return binary_search(arr, target, start, mid - 1);
  } else {
    return binary_search(arr, target, mid + 1, end);
  }
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const result = binary_search(arr, target, 0, n-1);
if(result === 'None') {
  console.log("원소가 존재하지 않습니다.");
} else {
  console.log(result + 1);
}
```
#### 반복문 이용
```javascript
const n = 10;
const target = 7;

function binary_search(arr, target, start, end) {
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === target) {
      return mid;
    } else if(arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return "None";
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const result = binary_search(arr, target, 0, n-1);
if(result === 'None') {
  console.log("원소가 존재하지 않습니다.");
} else {
  console.log(result + 1);
}
```
___
### <문제1 - 떡볶이 떡 만들기>
```
- 오늘 동빈이는 떡볶이 떡을 만드는 날입니다. 동빈이네 떡볶이 떡은 떡의 길이가 일정하지 않습니다.
대신에 한 봉지 안에 들어가는 떡의 총 길이는 절단기로 잘라서 맞춰줍니다.
- 절단기에 높이(H)를 지정하면 줄지어진 떡을 한 번에 절단합니다.
높이가 H보다 긴 떡은 H 위의 부분이 잘릴 것이고, 낮은 떡은 잘리지 않습니다.
- 예를 들어 높이가 19, 14, 10, 17cm인 떡이 나란히 있고 절단기 높이를 15cm로 지정하면 자른 뒤 떡의 높이는 15, 14, 10, 15cm가 될 것입니다.
잘린 떡의 길이는 차례대로 4, 0, 0, 2cm입니다. 손님은 6cm만큼의 길이를 가져갑니다.
- 손님이 왔을 때 요청한 총 길이가 M일 때 적어도 M만큼의 떡을 얻기 위해 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성하세요.
```
>Tip) 적절한 높이를 찾을 때까지 이진 탐색을 수행하여 높이 H를 반복해서 조정해라

### 내가 푼 방식
```javascript
const n = 4;
const m = 6;
let arr = [19, 15, 10, 17];
const temp = [];

function binary_search(arr, target, start, end) {
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    let tempArr = arr.slice();
    tempArr = tempArr.map(v=>{
      if(v > mid) return v - mid;
      else return 0;
    });
    let sum = tempArr.reduce((a, b)=>a+b);
    if(tempArr.reduce((a, b)=>a+b) >= target) {
      temp.push(mid)
      start = mid+1;
    } else {
      end = mid-1;
    }
  }
}

binary_search(arr, m, 0, Math.max(...arr));
console.log(Math.max(...temp))
```
### 강의 방식
```javascript
const n = 4;
const m = 6;
let arr = [19, 15, 10, 17];
let start = 0;
let end = Math.max(...arr);
let result = 0;

while(start <= end) {
  let total = 0;
  let mid = Math.floor((start+end) / 2);
  for(let i of arr) {
    if(i > mid) {
      total += i - mid;
    }
  }
  if(total < m) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result)
```
___
### <문제2 - 정렬된 배열에서 특정 수의 개수 구하기>
```
- N개의 원소를 포함하고 있는 수열이 오름차순으로 정렬되어 있습니다. 이때 이 수열에서 x가 등장하는 횟수를 계산하세요.
예를 들어 수열 {1, 1, 2, 2, 2, 2, 3}이 있을 때 x = 2라면, 
현재 수열에서 값이 2인 원소가 4개이므로 4를 출력합니다.
- 단, 이 문제는 시간 복잡도 O(logN)으로 알고리즘을 설계하지 않으면 시간 초과 판정을 받습니다.
```
>Tip) 이진 탐색을 두 번 실행하여 x의 첫 위치와 마지막 위치를 찾아서 차이를 계산해라

```javascript
const n = 7;
const x = 2;
const arr = [1, 1, 2, 2, 2, 2, 3, 3];
let count = 0;
let start = 0;
let end = arr.length - 1;

let first = -1;
let last = -1;

while(start <= end) {
  let mid = Math.floor((start+end) / 2);
  if(arr[mid] === x) {
    first = mid;
    end = mid - 1;
  } else if(arr[mid] < x){
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

start = 0;
end = arr.length - 1;

while(start <= end) {
  let mid = Math.floor((start+end) / 2);
  if(arr[mid] === x) {
    last = mid;
    start = mid + 1;
  } else if(arr[mid] < x){
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

if(last - first + 1 < 0) {
  console.log(-1)
} else {
  console.log(last - first + 1)
}
```