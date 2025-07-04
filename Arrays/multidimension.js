//3d arrays
//used when you want to group a chink of data on one items
//How to Access Elements in a JavaScript 2D Array

let ScoreResults = [
    ['Charlotte Nkuna', 100, 100, 'A'],
    ['Xolelwa Cekiso', 20, 10, 6, 'F'],
    ['Dakalo Kulati', 0, 100, 50, 'B'],
    ['Sibongile Rathokwane', 58, 43, 'A'],
    ['Bongumusa Brutus', 0, 0, 'TF'],
];
console.table(ScoreResults);


//How to insert an element into a 2D array

let MathScore = [
    ["Charlotte Nkuna", 70, 60, "A"],
    ["Xolelwa Cekiso", 10, 52, "B"],
    ["Sibongile Rathokwane", 36, 24, "B"],
    ["Dakalo Kulati", 8, 23, "F"],
    ["Bongumusa Brutus", 0, 0, "TF"]
  ];
  
  MathScore.push(["Tom Right", 30, 32, "B"]);
  
  MathScore.unshift(["Alice George", 28, 62, "A"]);

  console.table(MathScore);