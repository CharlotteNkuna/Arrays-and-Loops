function addNumbers() {
  let total = 0;

  // Get value from the textbox on html
  let numbers = document.getElementById("txtNum1").value;

  // Split function to split by a comma
  let numArray = numbers.split(",");

  // Loop through the array and add each number to the total
  for (let i = 0; i < numArray.length; i++) {
    total += parseInt(numArray[i]);
  }

  //displays total number
  document.getElementById("total").value = total;
}

//1d vs 2d arrays
//1d array

let rooms = ["Dylan", "Bob", "John"];

for (let i = 0; i < rooms.length; i++) {
  console.log(`Room ${i + 1}: ${rooms[i]}`);
}


//2d array
let hotel = [
  ["Dylan", "Bob", "Alice"], // Floor 1
  ["John", "Sophia", "Emma"], // Floor 2
  ["Liam", "Olivia", "Noah"], // Floor 3
];

// Loop through each floor and room to show guests
for (let floor = 0; floor < hotel.length; floor++) {
    console.log(`Floor ${floor + 1}:`);
    for (let room = 0; room < hotel[floor].length; room++) {
        console.log(`  Room ${room + 1}: ${hotel[floor][room]}`);
    }
}



//Iteration
//while loop
let i = 1;
while (i < 10) {
    console.log("The number is " + i);
    i++;
}

//for loop
for (let i = 0; i < rooms.length; i++) {
    console.log(`${rooms[i]} is renting room ${i + 1}`);
}


//Foreach loop
rooms.forEach((room, index) => {
    console.log(`${rooms} is renting room ${index + 1}`);
});

let result = addNumbers("1,2,3,4,5");
console.log("Total: " + result);
    