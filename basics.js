var str = "Hello world";
var age=78;
var num=9.87;
var flag=true;
var flag2= false
age = 'seventy eight';
var k = null;
var l = Number.MAX_VALUE+Number.MAX_VALUE;
console.log(l); // whenever we store the number more than the maximum value it will print as Infinity
console.log(k);
console.log(typeof str); // type of str // ans is String
console.log(typeof str+": "+str); //typeof used to tell the type of variable
console.log(typeof age+": "+age);
console.log(typeof num +" :"+num);
console.log(typeof flag+" :"+flag);
console.log(typeof flag2 +": "+flag2);
console.log(typeof age+" :"+age);

// var name = prompt("Whats your name?", "Enter your name here");
// confirm("Verify your name",name);
// alert("hello,"+name);
var age = 16;
var parentPermission = true;

if(age>=18 && age<=60 &&parentPermission ){
   console.log("Allowed for roller coaster");
}
else{
   console.log("Not allowed for roller coaster");
}


