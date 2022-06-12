// TASK_2
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
 console.log("Today is : " + daylist[day] + ".");
 let hour = today.getHours();
 let minute = today.getMinutes();
 let second = today.getSeconds();
 let prepand = (hour >= 12)? " PM ":" AM ";
 hour = (hour >= 12)? hour - 12: hour;
 if (hour===0 && prepand===' PM ')
 {
 if (minute===0 && second===0)
 {
 hour=12;
 prepand=' Noon';
 }
 else
 {
 hour=12;
 prepand=' PM';
 }
 }
 if (hour===0 && prepand===' AM ')
 {
 if (minute===0 && second===0)
 {
 hour=12;
 prepand=' Midnight';
 }
 else
 {
 hour=12;
 prepand=' AM';
 }
 }
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);


// TASK_3

function reverseNum(num) {
  return num
        .toString()
        .split('')
        .reverse()
        .join('')
      }

console.log(reverseNum(32243));


// TASK_4
function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(let i = n; i >= 1; i--){
      answer *= i;
    }
    return answer;
  } 
}
console.log(factorial(4));


// TASK_6
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join('+'));

// TASK_7
let month_name = function(month){
  list = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return list[month.getMonth()];
  };
  console.log(month_name(new Date("10/11/2009")));
  console.log(month_name(new Date("11/13/2014")));



  // TASK_8

  function upper_case(str)
{
  regexp = /^[A-Z]/;
  if (regexp.test(str))
   {
     console.log("String's first character is uppercase");
   }
   else
   {
     console.log("String's first character is not uppercase");
   }
}
upper_case('Abcd');
upper_case('abcd');