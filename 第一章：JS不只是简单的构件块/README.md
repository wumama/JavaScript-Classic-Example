### javascript不只是简单的构件块

#### 1.javascript对象、基本类型和字面值之间的区别

  JS字面值表示某种特定类型的值，例如：字符串、浮点数、布尔值。

JS基本类型是特定的数据类型的一个实例。JS中有5种这样的类型：String、Number、Boolean、null和undefined。

```javascript
var str1 = 'this is a simple string'  //声明一个变量
console.log(str1.length)  //23
console.log(str1)
```

在幕后，当代码在字面值上访问一个String对象的属性的时候，会创建一个新的String对象，并且其值设置为变量中所包含的字符串的值。访问并打印出Length属性，并且丢弃掉新创新的String对象。

javascript中确实有5个基本数据类型：字符串、数值、布尔类型、null和undefined。只有字符串、数值、布尔类型有对应的构造方法对象。字符串、浮点数、整数、布尔值都是字面值。

```javascript
var str1 = 'this is a simple string'  //字符串字面值
var num1 = 1.11  //值1.11的字面值
var bool = true  //值true是布尔类型的字面值
```

我们可以使用一个字面值表示或者使用该对象而不带new操作符，从而创建基本类型的布尔值、字符串、数字变量。

```javascript
var str1 = String('this is a simple string')  //基本类型字符串
var num1 = Number(1.11)  //基本类型数字
var bool = Boolean(true)  //基本类型布尔值
```

要有意实例化一个对象，使用new操作符：

```javascript
var str1 = new String('this is a simple string')  //String对象实例
var num1 = new Number(1.11)  //Number对象实例
var bool = new Boolean(true)  //Boolean对象实例
```

当你在使用严格相等性来比较一个对象示例和一个字面值的时候，你可以快速区分出一个基本类型和一个对象实例。

```javascript
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

//equal
//equal
//equal
//not equal
//not equal
//not equal
```

基本类型变量（没有使用new创建的变量）严格来说等于字面值，而对象实例不会。因为基本类型是根据值来比较的，而值是字面值。

```javascript
var str7 = 'this is a simple string'
var str8 = new String('this is a simple string')
console.log(typeOf(st7))  //string
console.log(typeOf(st8))  //object
```

#### 2.从字符串提取一个列表

```
提取之前：
this is a list of items: javascript, html, css, react.
提取后：
['javascript','html','css','react']
```

解决方法：

使用indexOf()找到冒号，然后再次使用它找到冒号后面的第一个句号。有了这两个位置，使用substring()方法提取字符串。获得了你想要得到的字符串，使用split()方法把该字符串分割为一个数组。

```javascript
var str = 'thit is one sentence. this is a list of items: javascript, html, css, react. that was the list of items.'
var startPos = str.indexOf(':')
var endPos = str.indexOf('.',startPos+1)
var list = str.substring(startPos+1, endPos).split(',')
console.log(list)
```

- indexOf()

indexOf()方法接受一个搜索值作为第一个参数（必需），还有一个（可选）的索引位置（起始位置），作为第二个参数。如果没找到对应的字符，那么返回-1。

如果var endPos = str.indexOf('.',startPos+1)没有在后面+1，那么最终会找到第一个句子的句点。

- substring()

substring()方法用于提取字符串中介于两个指定下标之间的字符。第一个参数（必需）起始位置，第二个参数（可选）结束位置，第二个参数不写那么就是到字符串结束。

返回值：一个新的字符串，其内容是从start到stop-1的所有字符串。

substring()方法不接受负数的参数。如果start和stop相等，返回就是空字符串。如果start大于stop那么会自动交换参数。

- substr()

substr()方法可在字符串中抽取从start下标开始的指定数目的字符串。第一个参数（必需）是起始下标，必须是数值，如果是负数就从 尾部开始算起。第二个参数（可选）是字符数。必须是数值，如果省略那么返回开始到结尾的字符串。

- split()

split()方法用于把一个字符串分隔成字符串数组。第一个参数（必需）是字符串或者正则表达式，第二个参数（可选）是控制返回值数组的长度，如果不写那么整个字符串都会被分隔。

```javascript
"hello".split("", 3)	//可返回 ["h", "e", "l"]
```

高级话题：

截取出来的数组可能包含有空白，所以需要用到String对象的trim()方法来清理。

```javascript
var str = 'thit is one sentence. this is a list of items: javascript, html, css, react. that was the list of items.'
var startPos = str.indexOf(':')
var endPos = str.indexOf('.',startPos+1)
var list = str.substring(startPos+1, endPos).split(',')
console.log(list) //[" javascript", " html", " css", " react"]
//清理空白
list.forEach(function(value,index,array){
  array[index] = value.trim()
})
console.log(list) //["javascript", "html", "css", "react"]
```

#### 3.检查一个存在的、非空的字符串

问题：要验证一个变量已经定义了，是一个字符串，并且它不为空。

- 变量定义了并且它不为空：`typeof unknownVariable != 'undefined' && unknownVariable`
- 判断是否是一个字符串：`typeof unknownVariable.valueOf() == 'string'`

```javascript
if((typeof unknownVariable != 'undefined' && unknownVariable) && 
    (typeof unknownVariable.valueOf() == 'string')){
}
```

#### 4.插入特色字符

问题：想要向字符串中插入一个特殊字符串，比如换行。

解决方案：在字符串中使用转义序列之一。javascript中的转义序列都是以一个反斜杠开始（\）。

| 序列     | 字符                     |
| ------ | ---------------------- |
| \'     | 单引号                    |
| \"     | 双引号                    |
| \\\    | 反斜杠                    |
| \b     | 退格                     |
| \f     | 换页符                    |
| \n     | 换行                     |
| \r     | 回车                     |
| \t     | 水平制表符                  |
| \ddd   | 八进制序列（3位：ddd）          |
| \xdd   | 十六制序列（2位：dd）           |
| \udddd | Unicode序列（4位hex数：dddd） |

转义序列最重要的用法之一，是在双引号或单引号分割开的字符串之中，包含双引号或单引号。

#### 5.使用新字符串替换模式

问题：想要用一个新的子字符串替换所有匹配的子字符串。

解决方案：使用String对象的replace方法和一个正则表达式。

```javascript
var src = 'now is the time, this is the tame'
var re = /t\w{2}e/g
var newSrc = src.replace(re, 'place')
console.log(newSrc)  //now is the place, this is the place
```

- replace()方法

replace()方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

语法：`stringObject.replace(regexp/substr,replacement)`

两个参数都是必须的。第一次参数规定子字符串或要替换的模式的RegExp对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为RegExp对象。第二个参数是一个字符串值，规定了替换文本或生成替换文本的函数。

```javascript
var str="Visit Microsoft!"
console.log(str.replace(/Microsoft/, "W3School"))
```

#### 6.找到并突出显示一个模式的所有实例

问题：想要在一个字符串中找到一个模式的所有实例。

解决方案：在一个循环中，使用正则表达式的exec方法和全局标志(g)，来找到一个模式的所有实例。

```javascript
var src = 'now is the time and this is the time and that is the time'
var re = /t\w*e/g
var matchArray
var strArr = ''

while((matchArray = re.exec(src)) != null){
  strArr += 'at  ' + matchArray.index + '  we found  ' + matchArray[0] + '\n'
}
console.log(strArr)
```

#### 7.使用捕获圆括号交换一个字符串中的单词

问题：我们可以接受一个带有名称和姓氏的输入字符串，并且交换名称，以便让姓氏先出现。

解决方案：使用捕获圆括号和一个正则表达式在字符串中找到并记住两个名字，然后互换它们。

```javascript
var name = 'Tom Lincoln'
var re = /^(\w+)\s(\w+)$/
var newName = name.replace(re, '$2,$1')
console.log(newName)

var name1 = 'Abe Lincoln'
var re1 = /^(\w+)\s(\w+)$/
var result = re.exec(name1)
var newName1 = result[2] + ',' + result[1]
console.log(newName1)
```

#### 8.使用命名实体来替代HTML标签

问题：你想要把示例标记粘到一个web页面中，并且转义该标记，打印出尖括号而不是进行内容解析。

解决方案：使用正则表达式把尖括号(<>)转换为命名的实体：&lt和&gt

```java
var pieceOfHtml = "<p>this is a <span>paragraph</span></p>"
pieceOfHtml = pieceOfHtml.replace(/</g,'&lt;')
pieceOfHtml = pieceOfHtml.replace(/>/g,'&gt;')
console.log(pieceOfHtml)
```

#### 9.把一个ISO 8601格式的日期转换为Date对象可接受的一种格式

问题：需要把一个ISO 8601格式的日期字符串转换为可以用于创建一个新的Date对象的值。

解决方案：把ISO 8601字符串解析为单个的日期值，并且使用它来创建一个新的javascript Date对象实例。

```javascript
var str = '2017-04-27T22:06:22Z'
str = str.replace(/\D/g,' ')
var dtcomps = str.split(' ')
//在基于1的ISO 8601月份和基于0的日期格式之间转换
dtcomps[1]--
var con = new Date(Date.UTC.apply(null,dtcomps))
console.log(con.toString())  //Fri Apr 28 2017 06:06:22 GMT+0800 (中国标准时间)
```

