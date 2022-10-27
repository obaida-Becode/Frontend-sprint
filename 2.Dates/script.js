// Exercise 1;
// Timezones of;
let timeNow = new Date();
let zoneBrussels = timeNow.getTimezoneOffset();
let zoneAnchorage = ((timeNow + (8*60) ))   ;
let zoneReykjavik;
let zoneSaintPetersburg;
let zoneDamas ;


console.log(timeNow);
console.log(zoneBrussels);
console.log(zoneAnchorage);

// function getTimezoneOffset(option) {
//     const now = new Date();    
//     const tzString = now.toLocaleString('en-US', { option });  // local time for timeZone
//     const localString = now.toLocaleString('en-US');    // local time
//     const diff = (Date.parse(localString) - Date.parse(tzString)) / 3600000; // ((local time) - (local time for new timeZone))/ 1hours in mill seconds = 3600000  
//     const offset = diff + now.getTimezoneOffset() / 60;   // time diffirent + time now / 60 minuts 
    

//     return offset;
    
//   }
//   const offset = getTimezoneOffset('Pacific/Honolulu');
//   console.log(offset);

// Exercise 2 
// timeStamps , how many days have passed since the date of my birthday till now;

// function feelingOLd(){
//     const dateNow = new Date();
//     const birthday = new Date("02/12/1984")
//     const diffirent = ((dateNow - birthday)/1000/60/60/24);
//     console.log(diffirent);

// }
// feelingOLd();
// how many days have passed since any point in time( after 1970);

function passedDays(timePoint){
    const dNow = new Date(timePoint).getTime(); // date now 
    let daysPassed = Math.floor(dNow/1000/60/60/24)
    
    return daysPassed;
}
const days = passedDays("01/02/1970")
console.log(days)
// Exercise 3 ;
// find the exact time and date we will be in 8000 hours.

function futureTime(input){
const momentPoint = new Date()
let futureMoment = momentPoint + 
}