//while loop condition examples
let val = 1;
while (val < 6) {
    console.log(val);
    val += 1; // +=1 or ++ is the repeating limit
}



let va = 1;
while (1 < 10) {
    console.log(va); //it will continue because there is no limit
} 



let dice = Math.ceil(Math.random()*6);// this is an example of rolling a dice
console.log(dice);
let count = 1;

while (dice != 6) {
  dice = Math.ceil(Math.random()*6);
  console.log(dice);
  count += 1;
}

console.log('You got 6!');
console.log('You rolled',count,'times');// we cannot know how many times the code should run, 
// because we don't know when the user will roll a 6, 
// and that is why we use a while loop.
