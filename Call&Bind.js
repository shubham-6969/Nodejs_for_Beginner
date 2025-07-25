/* const user = {
  name: "shubham",
}

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

// calling function 

greet.call(user, "hello ");

const newFunc = greet.bind(user);
newFunc("hi") */

// apply mathod 

const user = {
  name: "Shubham",
}
function intro( age, city, country){
  console.log(`Hello, my name is ${this.name} i am ${age} year old and i am from ${city},${country} `)
}

intro.apply(user, ["21","Delhi","India"]);