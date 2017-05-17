var name = 'Tom Lincoln'
var re = /^(\w+)\s(\w+)$/
var newName = name.replace(re, '$2,$1')
console.log(newName)

var name1 = 'Abe Lincoln'
var re1 = /^(\w+)\s(\w+)$/
var result = re.exec(name1)
var newName1 = result[2] + ',' + result[1]
console.log(newName1)