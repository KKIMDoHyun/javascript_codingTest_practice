// 이름을 가나다 순서대로 배정하고 번호를 매기려고 한다.

// 데이터
const students = ['강은지', 
                '김유정', 
                '박현서', 
                '최성훈', 
                '홍유진', 
                '박지호', 
                '권윤일', 
                '김채리', 
                '한지호', 
                '김진이', 
                '김민호', 
                '강채연'];

students.sort();
console.log(students)
for(let key in students) {
    console.log(`번호: ${parseInt(key, 10)+1}, 이름:${students[key]}`)
}