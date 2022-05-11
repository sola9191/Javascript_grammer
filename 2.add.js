const fruits = ['🍓', '🍺', '🍑']

for (let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i])
}

// 추가, 삭제 - 좋지 않은 방식
fruits[6] = '🍉'
console.log(fruits);

delete fruits[0];
console.log(fruits);