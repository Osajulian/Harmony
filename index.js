//CommonJS import statement
const rect = require("./rectangle");

const solveRect = (l, b) => {
  console.log(`Solving for Rectangle with l = ${l} , and b = ${b}`);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("Error", err.message);
    } else {
      console.log(
        `The area of the rectangle of dimensions l = ${l} and b = ${b} is ${rectangle.area()}`
      );
      console.log(
        `The perimeter of the rectangle of dimensions l = ${l} and b = ${b} is ${rectangle.perimeter()}`
      );
    }
  });
};

solveRect(2, 4);
solveRect(5, 7);
solveRect(0, 4);
