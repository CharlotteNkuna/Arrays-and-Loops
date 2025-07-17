switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}

//case switch
let Day;

switch (
  new Date().getDay() //it gets today's day of the week as a number: from 0-sunday
) {
  case 0:
    Day = "Monday";
    break;

  case 1:
    Day = "Tuesday";
    break;

  case 2:
    Day = "Wednesday";
    break;

  case 3:
    Day = "Thursday";
    break;

  case 4:
    Day = "Friday";
    break;

  case 5:
    Day = "Saturday";
    break;

  case 6:
    Day = "Sunday";
    break;
}

console.log(`Today is ${Day}`);

//Using default in switch statement
let text;

switch (new Date().getDate()) {
  case 3:
    text = "Today is Monday";
    break;

  case 4:
    text = "Today is Tuesday";
    break;

  default:
    text = "definitely not the weekend lol";
}

console.log(`Today is ${text}`);

//Common code blocks
let weekend;

switch (new Date().getDay()) {
  case 4:
  case 5:
    weekend = "Soon it is Weekend";
    break;

  case 0:
  case 6:
    weekend = "It is Weekend";
    break;

  default:
    weekend = "looking forward to the Weekend?";
}

console.log(`Are you ${weekend}`);

//Strict Comparison
//let x = "0";

switch (x) {
  case 0:
    text = "Off";
    break;

  case 1:
    text = "On";
    break;

  default:
    text = "No value found";
}

console.log(`value is ${text}`);

//switch is on as a string
let x = "1"; // this is a string

switch (x) {
  case "0":
    text = "Off";
    break;

  case "1":
    text = "On";
    break;

  default:
    text = "No value found";
}

console.log(`value is ${text}`);
