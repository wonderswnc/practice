/* 
题目描述
实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
2、如果 num 能被 3 整除，返回字符串 fizz
3、如果 num 能被 5 整除，返回字符串 buzz
4、如果参数为空或者不是 Number 类型，返回 false
5、其余情况，返回参数 num
示例1
输入

15
输出

fizzbuzz

 */


function fizzBuzz(num) {
  if (num === undefined || Object.prototype.toString.call(num) !== '[object Number]') {
    return false
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz'
  } else if (num % 3 === 0) {
    return 'fizz'
  } else if (num % 5 === 0) {
    return 'buzz'
  }
  return num
}
var num = new Number(120)
console.log(fizzBuzz(num), typeof num) // fizzBuzz, object
//测试判例
console.log([fizzBuzz(''), //false
  fizzBuzz(), //false
  fizzBuzz(0), //fizzBuzz
  fizzBuzz(15), //fizzBuzz
  fizzBuzz(9), //fizz
  fizzBuzz(25), //buzz
  fizzBuzz(29) //29
])