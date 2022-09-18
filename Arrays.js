let values = [2,4,8];
//values.push(2);
console.log(values);

console.log('Length of values arrry is '+ values.length);
console.log(values.toString()); // to string method is overrided already into the array class
// so when we call tostring it will convert the array to string

console.log(values.valueOf()); // again it will convert to array

let frontend = ["Angular js", "React js", "vue js"];
console.log(frontend);
console.log(Array.isArray(frontend)); // frontend obj or var is array or not
console.log(frontend[2]);

for(let i in frontend){ // printing
    console.log(frontend[i]);
}



