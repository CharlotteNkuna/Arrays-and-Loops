let pm =50;  //pass mark
let am =50;  //arquired marks
let dnw =0;  //Did not write
let distinction =80;
let exemption =70;

if(am>=dnw){
    if(am>=distinction)
    console.log("SUMMA CUM LAUDE");
    
    
else if (am>=exemption && am<distinction){
    console.log("MAGNA CUM LAUDE");
} 


else if (am>=pm){
console.log("CUM LAUDE")
 } 
 
 else if (am<pm){
    console.log("Not Yet Achieved");
 }
  
 }else{
    console.log("did Not Write")
}
