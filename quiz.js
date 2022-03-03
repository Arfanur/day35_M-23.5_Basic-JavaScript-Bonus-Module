// Quiz
console.log(3 / 0);

function compare(a, b) {
    if (a == b) {
        return true;
    }
    else {
        return false;
    }
}
const result = compare(15, '15');
console.log(result);    // true

function compare(a, b) {
    if (a.toString() === b) {
        return true;
    }
    else {
        return false;
    }
}
const result1 = compare(25, 25);
console.log(result1);   // false

console.log("123" + 123);   // 123123

let a = "hi";
let b = "there";
console.log(a + b);

for(let i=5; i<=100; i++){
    // console.log(i);
}

const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i < array.length; i++) {
    if (i == 5) {
        continue;
    }
    console.log(array[i]);  // 23457
}