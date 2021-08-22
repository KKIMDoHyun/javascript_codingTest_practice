// 다음 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

// 데이터
const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England': 242900,
}

const korea_width = nationWidth['korea']
delete nationWidth['korea'];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

//비교할 값 저장
let gap = Math.max.apply(null, values); //가장 큰 값
let item = [];

for(let i in entry) {
    if(gap > Math.abs(entry[i][1]-korea_width)){
        gap = Math.abs(entry[i][1]-korea_width);
        item = entry[i]; 
    }
}
console.log(item[0], item[1]-korea_width);

