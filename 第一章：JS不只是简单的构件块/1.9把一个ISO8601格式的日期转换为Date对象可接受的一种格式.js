var str = '2017-04-27T22:06:22Z'
str = str.replace(/\D/g,' ')
var dtcomps = str.split(' ')
//在基于1的ISO 8601月份和基于0的日期格式之间转换
dtcomps[1]--
var con = new Date(Date.UTC.apply(null,dtcomps))
console.log(con.toString())  //Fri Apr 28 2017 06:06:22 GMT+0800 (中国标准时间)