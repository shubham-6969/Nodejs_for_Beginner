function outer() {
  let name = "shubham patwal ";

  function inner() {
    console.log(name);
  }
  return inner;
}

const result = outer();
result();
