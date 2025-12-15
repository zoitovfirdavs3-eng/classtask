let arr = [1, 2, 3, 4, 5, 6];

let sumNum = (arr) => arr.reduce((acc, item) => acc += item, 0);

console.log(sumNum(arr));
