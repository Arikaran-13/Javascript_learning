let alien = {
    name: "Arikaran",
    tech: "Java , Springboot",
    laptop: {
        name: "Dell",
        ram: 16,
        cpu: "i5"
    }
}

//console.log(alien);
console.log(alien.name);
console.log(alien.tech);
console.log(alien.laptop.name?.length); //it will print only if length property is present

console.log(typeof alien);

console.log(alien.toString());
console.log(alien.valueOf());

for(let i in alien){
   console.log(alien[i]);
}
for(let i in alien.laptop){ // it will print all the property of laptop 
    //which present inside alien
    console.log(alien.laptop[i]);
}

console.log(alien.hasOwnProperty("name")); // alien obj has the property or not

Object.defineProperty(alien,"name",{
            configurable:true, // we can perform configuration like delete
            writable:false,// we cannot overwrite the prperty name
            enumerable:true, // enumerable true we can able to read
});

alien.name="Sham";
console.log(alien.name);
console.log(alien.tech);
delete alien.tech; // it will delete the property tech which present inside alien
console.log(alien?.tech);
