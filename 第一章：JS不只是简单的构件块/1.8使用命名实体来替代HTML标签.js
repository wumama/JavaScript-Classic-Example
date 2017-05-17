var pieceOfHtml = "<p>this is a <span>paragraph</span></p>"
pieceOfHtml = pieceOfHtml.replace(/</g,'&lt;')
pieceOfHtml = pieceOfHtml.replace(/>/g,'&gt;')
console.log(pieceOfHtml)