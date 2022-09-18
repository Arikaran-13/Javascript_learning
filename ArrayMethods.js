
console.log('Array methods in js: ');
let num =[]; // empty array

num.push(7,9,10);
console.log('After adding element : ', num);

num.unshift(100); // adding 100 ,19 in first position
num.unshift(19); // adding 19 in first position

console.log(num);

let removed = num.pop(); // last  element will be removed
console.log('removed element',removed);
console.log(num);

let removed2 = num.shift(); // first element wll be removed
console.log('removed element',removed2);
console.log(num);

let newarr = num.concat();
console.log('cloned array using concat method');
console.log(newarr);


