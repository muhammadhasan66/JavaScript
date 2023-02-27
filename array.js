// //-------------------- Question no 1

Array=[""]

// // --------------------Question no 2

Array=[""]

// //-------------------- Question no 3

Array = ["muhammad hasan",]

//-------------------- Question no 4 

Array =[12,]

//---------------------Question no 5

Array =[true]

//-------------------- Question no 6

Array=["muhammad hasan",15,false]

//-------------------- Question no 7

let qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.PHIL", "PHD"]

document.write(`<h1> qualification <h1/> <br>`)
document.write(`${qualification[0]} <br>`)
document.write(`${qualification[1]} <br>`)
document.write(`${qualification[2]} <br>`)
document.write(`${qualification[3]} <br>`)
document.write(`${qualification[4]} <br>`)
document.write(`${qualification[5]} <br>`)
document.write(`${qualification[6]} <br>`)
document.write(`${qualification[7]} <br>`)

//-------------------- Question no 8

var students=["micheal","jhon","tony"]
var studentScore=[320,230,480]
document.write(`Score of ${students[0]} is ${studentScore[0]} percentage:${studentScore[0] /500 * 100}% <br>`) 
document.write(`Score of ${students[1]} is ${studentScore[1]} percentage:${studentScore[1] /500 * 100}% <br>`)
document.write(`Score of ${students[2]} is ${studentScore[2]} percentage:${studentScore[2] /500 * 100}%`)

//------------------- Question no 9

var color =["red","green","blue","purple","yellow"]
document.write(`${color} <br>`)

//-------------------- section A

var askbeginingcolor=prompt("which color you want to add in starting")
color.unshift(askbeginingcolor)
document.write(`${color} `)

//-------------------- section B

var askendcolor=prompt("which color you want to add in ending")
color.push(askendcolor)
document.write(`${color} `)

//-------------------- Section C

var askbeginingcolor=prompt("which color you want to add in starting")
color.unshift(askbeginingcolor)
document.write(`${color} `)

//--------------------- section D

var askendcolor=prompt("which color you want to remove in Starting")
color.shift(askendcolor)
document.write(`${color} `)

//---------------------- Section E

var askendcolor=prompt("which color you want to remove in Ending")
color.pop(askendcolor)
document.write(`${color} `)

//---------------------- Section f










