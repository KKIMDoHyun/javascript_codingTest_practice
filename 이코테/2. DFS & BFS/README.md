# DFS
- 깊이 우선 탐색(깊은 부분을 우선적으로 탐색하는 알고리즘)
- 스택 자료구조(혹은 재귀 함수) 이용
# BFS
- 너비 우선 탐색(가까운 노드부터 우선적으로 탐색하는 알고리즘)
- 큐 자료구조 이용
___
### <DFS 예제>
```javascript
const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
];
const visited = [];
for (let i in graph) {
  visited.push(false);
}

function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}
dfs(graph, 1, visited);
```
___
### <BFS 예제>
```javascript
const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
];
let queue = [];
const visited = [];
for (let i in graph) {
  visited.push(false);
}

function bfs(graph, v, visited) {
  queue.push(v);
  visited[v] = true;

  while (queue.length !== 0) {
    let v = queue.shift();
    console.log(v);
    for (let i of graph[v]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
}
bfs(graph, 1, visited);
```
___
### <문제1 - 음료수 얼려 먹기>
- N x M 크기의 얼음 틀이 있습니다. 구멍이 뚫려 있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시됩니다. 구멍이 뚫려 있는 부분끼리 상, 하, 좌, 우로 붙어 있는 경우 서로 연결되어 있는 것으로 간주합니다. 이때 <u>얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수를 구하는 프로그램을 작성</u>하세요. 다음의 4 x 5 얼음 틀 예시에서는 아이스크림이 총 3개 생성됩니다.
___
 00110
 00011
 11111
 00000
> Tip) DFS 활용
> 특정한 지점의 주변 상, 하, 좌, 우를 살펴본 뒤 값이 '0'이면서 아직 방문하지 않은 지점이 있다면 해당 지점을 방문

```javascript
const graph = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
];
const n = graph.length;
const m = graph[0].length;
let result = 0;

function dfs(x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }
  if (graph[x][y] === 0) {
    graph[x][y] = 1;
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(i, j) === true) {
      result++;
    }
  }
}
console.log(result);
```
___
### <문제2 - 미로 탈출>
- 동빈이는 N x M 크기의 직사각형 형태의 미로에 갇혔습니다. 미로에는 여러 마리의 괴물이 있어 피해 탈출해야 합니다.
- 동빈이의 위치는 (1, 1)이며 미로의 출구는 (N, M)의 위치에 존재하며 한 번에 한 칸씩 이동할 수 있습니다. 이때 괴물이 있는 부분은 0으로, 괴물이 없는 부분은 1로 표시되어 있습니다. 미로는 반드시 탈출할 수 있느 형태로 제시됩니다.
- 이때 동빈이가 탈출하기 위해 움직여야 하는 최소 칸의 개수를 구하세요. 칸을 셀 때는 시작 칸과 마지막 칸을 모두 포함해서 계산합니다.
다음과 같은 경우에서 최소 칸의 개수는 10입니다.
_______
5 6
101010
111111
000001
111111
111111
> Tip) BFS 활용
> (1, 1) 지점부터 BFS를 수행하여 모든 노드의 최단 거리 값을 기록해라

```javascript
const graph = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
];
const n = graph.length;
const m = graph[0].length;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const queue = [];

function bfs(x, y) {
  queue.push([x, y]);
  while (queue.length !== 0) {
    const temp = queue.shift();
    let x = temp[0];
    let y = temp[1];
    for (let i = 0; i < 4; i++) {
      let next_x = x + dx[i];
      let next_y = y + dy[i];

      if (next_x < 0 || next_x >= n || next_y < 0 || next_y >= m) {
        continue;
      }
      if (graph[next_x][next_y] === 0) {
        continue;
      }
      if (graph[next_x][next_y] === 1) {
        graph[next_x][next_y] = graph[x][y] + 1;
        queue.push([next_x, next_y]);
      }
    }
  }
  return graph[n - 1][m - 1];
}
console.log(bfs(0, 0));
```