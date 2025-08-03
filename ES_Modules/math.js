// Calculator 

const math = {
  add : (a, b) => a + b,
  sub : (a , b) => a - b,
  multi : (a, b) => a * b,
  div : (a , b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
  },
};

export default math;