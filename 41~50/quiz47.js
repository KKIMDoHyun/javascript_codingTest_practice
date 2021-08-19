// n개의 데이터 중 중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고싶다.

const people = {
    이호준: '01050442903',
    이호상: '01051442904',
    이준호: '01050342904',
    이호준: '01050442903',
    이준: '01050412904',
    이호: '010504443904',
    이호준: '01050442903'
  }
  let result = new Set();
  
  for(let key in people){
    result.add(people[key]);
  }
  
  console.log(result.size);