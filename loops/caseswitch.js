// we use case to identify a day of the week

let dayz = 2;
//let day = Date.now();
let dayName; // we dont declare this variable for now when we are doing switches

switch(dayz){
    case 1:
        dayName = "Monday";
    break;

    case 2: 
        dayName = "Tuesday";
    break;

    case 3: 
        dayName = "Wednesday";
    break;

    case 4: 
        dayName = "Thursday";
    break;

    case 5: 
        dayName = "Friday";
    break;

    case 6: 
        dayName = "Saturday";
    break;

    case 7: 
        dayName = "Sunday";
    break;

    default:
        dayName = "Invalid day"; // if day name is more than 7(on 7 cases) then it will default. we use default to replace a value
}

console.log(`Today is: ${dayName}`); 

// dont check the above

//setting up a day autometically
let days = new Date().getDay(); // Get the day of the week (0-6)
let dayNames;

switch (days) {
    case 0:
        dayNames = "Sunday";
        break;
    case 1:
        dayNames = "Monday";
        break;
    case 2:
        dayNames = "Tuesday";
        break;
    case 3:
        dayNames = "Wednesday";
        break;
    case 4:
        dayNames = "Thursday";
        break;
    case 5:
        dayNames = "Friday";
        break;
    case 6:
        dayNames = "Saturday";
        break; //THE MAIN AIM OF BREAKING IS TO END OF A CASE
    default:
        dayNames = "Invalid day"; // This case is unlikely as getDay() returns 0-6
}

console.log(`Today is: ${dayNames}`); 


// dont check the above


let day = 0; 
let dayNam;
let workingdays;

switch(day){
    case 1:
        dayNam= "monday";
        break;
    case 2:
        dayNam = "Tuesday"
        break;
    case 3:
        dayNam = "Wednesday"
        break;
    case 4:
        dayNam = "Thursday"
        break;
    case 5:
        dayNam = "friday"
    case 6:
        dayNam = "Saturday"
        break;
    case 7:
        dayNam = "Sunday"
        break;
        default:
            dayNam="Invalid day"
}
console.log(`today is : ${dayNam}`);

//using arrays
let workDay = new Array();

switch(day){
case 0:
    workDay[0]="Monday"

case 1:
workDay[1]="Tuesday"

case 2: 
workDay[2]="Wednesday"

case 3:
    workDay[3]="Thursday"

case 4:
    workDay[4]="Friday"
    workingdays=`${workDay} are working days of the week`
    break;

case 5:
    workDay[5]="Saturday"

case 6:
    workDay[6]="Sunday"
    
break;

default:
    workDay[7]="invalid day"
}

console.log(`${workingdays}`)



