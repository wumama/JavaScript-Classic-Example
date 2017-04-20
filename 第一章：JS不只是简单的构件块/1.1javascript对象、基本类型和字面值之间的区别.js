var str1 = 'this is a simple string'  //声明一个变量
console.log(str1.length)  //23
console.log(str1)

var str2 = 'this is a simple string'  //字符串字面值
var num2 = 1.11  //值1.11的字面值
var bool2 = true  //值true是布尔类型的字面值

var str3 = String('this is a simple string')  //基本类型字符串
var num3 = Number(1.11)  //基本类型数字
var bool3 = Boolean(true)  //基本类型布尔值

var str4 = new String('this is a simple string')  //String对象实例
var num4 = new Number(1.11)  //Number对象实例
var bool4 = new Boolean(true)  //Boolean对象实例

// 使用严格相等性来来比较一个对象示例和一个字面值
var str5 = 'this is a simple string'
var num5 = 1.11
var bool5 = true

if (str5 === 'string') {
  console.log('equal')
}
if (num5 === 1.11) {
  console.log('equal')
}
if (bool5 === true) {
  console.log('equal')
}

var str6 = new String('this is a simple string')
var num6 = new Number(1.11)
var bool6 = new Boolean(true)

if (str6 === 'string') {
  console.log('equal')
}else{
  console.log('not equal')
}

if (num6 === 1.11) {
  console.log('equal')
}else{
  console.log('not equal')
}

if (bool6 === true) {
  console.log('equal')
}else{
  console.log('not equal')
}

var str7 = 'this is a simple string'
var str8 = new String('this is a simple string')
console.log(typeOf(st7))  //string
console.log(typeOf(st8))  //object