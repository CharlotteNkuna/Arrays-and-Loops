//1D arrays
let char = ["charlotte", "nkuna", "years" , "nku"];
console.table(char );


//2d arrays
//used when you want to group a chink of data on one items
//How to Access Elements in a JavaScript 2D Array

let ScoreResults = [
    ['Charlotte Nkuna', 100, 100, 96, 'A'],
    ['Xolelwa Cekiso', 20, 10, 6, 'F'],
    ['Dakalo Kulati', 0, 70, 50, 'B'],
    ['Sibongile Rathokwane', 58, 43, 50, 'A'],
    ['Bongumusa Brutus', 0, 0, 0, 'TF'],
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

  
  let student = [
    ["Name", "Charlotte"],
    ["Maths", 50],
    ["English", 30],
    ["Science", 90]
  ];
  
  console.log(student); 


//3D arrays
//can be used for designing buildings, games
let grads = [
    [
    ["Name", "Charlotte"],
    ["Maths", 50],
    ["English", 30],
    ["Science", 90]
    ],

    [
        ["Name", "Malwandla"],
        ["Maths", 90],
        ["English", 70],
        ["Science", 90]
    ]
  ];
  
  console.log(grads); 


  
