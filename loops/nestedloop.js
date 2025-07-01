//A nested loop is a loop inside another loop.
//This is how we can use a nested loop (while loop inside a for loop) 
// to calculate the average number of rolls it takes to get a 6:

let numExperiments = 1000;
let totalRolls = 0;

for (let i = 0; i < numExperiments; i++) {
  let count = 0;
  while (true) {
    let dice = Math.floor(Math.random() * 6) + 1;
    count++;
    if (dice === 6) {
      break;
    }
  }
  totalRolls += count;
}

console.log("Doing " + numExperiments + " experiments");
console.log("Average rolls to get 6:", totalRolls / numExperiments);
