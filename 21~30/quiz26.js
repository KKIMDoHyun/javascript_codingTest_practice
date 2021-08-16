// 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있다.
// 영어로는 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune 이다. 
// 한글로 입력하면 영어 이름을 반환하도록 해라

const planets = {
    수성 : "Mercury",
    금성 : "Venus",
    지구 : "Earth",
    화성 : "Mars",
    목성 : "Jupiter",
    토성 : "Saturn",
    천왕성 : "Uranus",
    해왕 : "Neptune"
}

const name = prompt();
console.log(planets[name]);