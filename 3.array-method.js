// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍓', '🍑','🍓','🥝']

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits))
console.log(Array.isArray([]))

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🥝'))

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🥝'))

// 추가 - 제일 뒤
console.log(fruits.push('🍅')) // 배열 자체를 수정(업데이트)
console.log(fruits)
// 추가 - 제일 앞
console.log(fruits.unshift('🍔')) // 배열 자체를 수정(업데이트)
console.log(fruits)

// 제거 - 제일 뒤
console.log(fruits.pop()) // 배열 자체를 수정(업데이트)
console.log(fruits)

// 제거 - 제일 앞
console.log(fruits.shift()) // 배열 자체를 수정(업데이트)
console.log(fruits)
console.clear()

// 중간에 추가 또는 삭제
const item = fruits.splice(1,1)
console.log(fruits) // 배열 자체를 수정(업데이트)
console.log(item)
fruits.splice(1,1,'🍭')
console.log(fruits)

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0,2)
console.log(newArr)
newArr = fruits.slice(-1);
console.log(newArr)

// 여러개의 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2)
console.log(arr3)

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse()
console.log(arr4)

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1,2,3],
    [4,[5,6]]
];
let changeArr = arr.flat(2)
console.log(changeArr);

// 특정한 값으로 배열을 채우기
changeArr.fill(0) // 배열 자체를 수정
console.log(changeArr)
changeArr.fill('s', 0,3) //end index는 포함 X
console.log(changeArr);

// 배열을 문자열로 합하기
let text = changeArr.join('|');
console.log(text)
console.log(typeof(text))