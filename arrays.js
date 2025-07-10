//Literal array type
//all of the strings on console
let courses = ["HTML", "JavaScript", "CSS", "ReactJS"];              //eg string array
console.log(" Litersal array: " + courses);

//only the selected string number
let numbers = ["Ten", "Twenty", "Thirty", "Fourty"]; 
console.log(numbers[3]);



//Using JavaScript Keyword
//selected number of strings in keyword
let student = new Array(6);                                         //doesnt have a data type, so we will do it manually

student [0] = "TommyTV";
student [1] = "Goitse";
student [2] = "Charlotte";
student [3] = "Xolelwa";
student [4] = "Sibongile";
student [5] = "Bonginkosi";

console.log(student [2]);

// all the strings in keyword
let students = new Array(4);                                         

students [0] = "TommyTV";
students [1] = "Goitse";
students [2] = "Charlotte";
students [3] = "Xolelwa";
students [4] = "Sibongile";
students [5] = "Bongi";

console.log(" Keyword of 5 students: " + students);



//horizontal list
let pin = new Array(10, 15, 30, 20, 7);
console.log(pin[0], pin[3], pin[4]);

//vertical list
let pins = new Array(10, 15, 30, 20, 7);
console.log(pins[1]);
console.log(pins[3]);
console.log(pins[4])



let graduates = new Array();                                         

graduates [0] = "Nkuna";
graduates [1] = "Char";
graduates [2] = "Lotte";
graduates [3] = "Xolelwa";
graduates [4] = "Cekiso";
graduates [5] = "Sbosh";

console.log(" Keyword of successful graduates: " + graduates);

//empty element
let grads = new Array(10);                               
console.log(" Keyword of 5 grads: " + grads);

//skipping the programming numbrs while have an arry limit
let gra = new Array(10);                                         

gra [0] = "Charlotte";
gra [3] = "Nkuna";
gra [4] = "Sibongile";
gra [6] = "Anna";
gra [7] = "BrXolelwa";
gra [9] = "Cekiso";

console.log(" Keyword of graduates: " + gra);




//adding learner
learne = ["Thabiso", "Sipononono", "Lelwa"];
learne.length = 5;
console.log(learne);

//adding items
learners = ["pule", "tshidi", "mbeka"];

learners.push("Ducks") //when we push we are injecting
learners.length = 5;
console.log(learners);


//displays empty space when listing. inc the word we pushed with the length
learn = ["me", "you", "us"];
learn.length = 10;
learn.push("we");
learn[7] = "them";
learn[9] = "they";
learn[10] = "she";

console.log(learn);






//choose any method that works for you. they are all correct.

