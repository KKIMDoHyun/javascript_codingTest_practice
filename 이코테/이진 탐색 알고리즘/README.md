# 이진 탐색 알고리즘
- <strong>순차 탐색: </strong> 리스트 안에 있는 특정한 데이터를 찾기 위해 앞에서부터 데이터를 하나씩 확인하는 방법
- <strong>이진 탐색: </strong> 정렬되어 있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 방법  
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