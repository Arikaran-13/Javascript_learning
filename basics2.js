// datatypes

var num =9;
var fnum = 8.98;
var flag = true;
var str= "Arikaran";
var k; // undefined value store initially
var m = Number.MAX_VALUE+Number.MAX_VALUE;

console.log(num);
console.log(fnum);
console.log(flag);
console.log(str);
console.log(k);
console.log(m);

// operators

var a =9;
var b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); 

console.log("-------------------");

console.log(a===b); // it will return  boolean value by checking both LHS and RHS side
console.log(a!==b);
console.log(a>b);
console.log( 15=="15"); // when we use relational == operator it will string 15 to int 15 automarically 
console.log(15 != "15");
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

console.log("----------------");

function getTodayDate(){
var date = new Date(); //object
 alert(date.getDate() +"/"+date.getMonth()+"/"+date.getFullYear());
}
function printThePage(){
 window.print(); // it will print by redrecting tp the printer page 
}
