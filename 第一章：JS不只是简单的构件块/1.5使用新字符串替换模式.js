var src = 'now is the time, this is the tame'
var re = /t\w{2}e/g
var newSrc = src.replace(re, 'place')
console.log(newSrc)  //now is the place, this is the place