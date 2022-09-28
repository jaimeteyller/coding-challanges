// Question 1: In which floor does Santa ends up on
// ( --> should go Up 1 floor
// ) --> should go Down 1 floor
const fs = require("fs");

function question1() {
  fs.readFile("./input.txt", (err, data) => {
    console.time("Q1 reading time:");
    const directions = data.toString("utf-8").split("");
    const answer = directions.reduce((accumulator, currentValue) => {
      if (currentValue === "(") {
        return (accumulator += 1);
      } else if (currentValue === ")") {
        return (accumulator -= 1);
      }
    }, 0);
    // console.log(directions);
    console.timeEnd("Q1 reading time:");
    console.log("floor: ", answer);
  });
}

question1();

// Question 2: When does Santa Claus first enter the basement
function question2() {
    fs.readFile("./input.txt", (err, data) => {
      console.time("Q2 reading time:");
      const directions = data.toString("utf-8").split("");
      let accumulator = 0, counter = 0;
      const answer = directions.some((currentPosition) => {
        if (currentPosition === "(") {
          accumulator += 1;
        } else if (currentPosition === ")") {
          accumulator -= 1;
        }
        counter ++
        return accumulator < 0;
      });
      // console.log(directions);
      console.timeEnd("Q2 reading time:");
      console.log("enter the basement at: ", counter);
    });
  }
  
  question2();