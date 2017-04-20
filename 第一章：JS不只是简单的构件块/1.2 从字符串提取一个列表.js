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