function isEven(num) {
    return num % 2===0
  }
  console.log(isEven(2)); // true
  console.log(isEven(5)); // false
  //2. Проверяет вопрос ли?
function isQuestion(str) {
    if(str==="?"){
        return true
    }
 return false
}

console.log(isQuestion("Как ты?")); // true
console.log(isQuestion("Как ты")); // false
function repeat(str) {
 
    let a;
    let b;      
    return str
}

console.log(repeat("he", 3)); // "hehehe"
4.// Суммирует все числа
function sum(nums) {
    return 5+10+3
}

console.log(sum([5, 10, 3])); // 18
function reverseString(str) {
    return str
}

console.log(reverseString("hello"));