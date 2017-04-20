var src = 'now is the time and this is the time and that is the time'
var re = /t\w*e/g
var matchArray
var strArr = ''

while((matchArray = re.exec(src)) != null){
  strArr += 'at  ' + matchArray.index + '  we found  ' + matchArray[0] + '\n'
}
console.log(strArr)