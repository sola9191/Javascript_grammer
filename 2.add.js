const fruits = ['π', 'πΊ', 'π']

for (let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i])
}

// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ
fruits[6] = 'π'
console.log(fruits);

delete fruits[0];
console.log(fruits);