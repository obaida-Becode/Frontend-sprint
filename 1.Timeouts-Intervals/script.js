// // Exercise 1 ;
// // display the word prout on character at a time (one letter par second) by inter;

// let timeout= setInterval(runApp,1000);

// index = 0;
// function runApp(){
//     let word = "prout".slice("");
//     document.body.innerHTML += word[index];
//         // console.log(word[index])
//         index++
        
//         if(index === word.length){
//           clearInterval(timeout); 
           
// }
// }

// stop(timeout);

// // Exercise 2;
// // Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second;

//   let second = 0;
//   let timeInSeconds = setInterval(displaySeconds,1000)
//   function displaySeconds(){
  
//     document.body.innerHTML = `the time in the seconds ${second}s `
//    second++;
//    let minute = 0;
//    minute = (second % 60 === 0)
//    if(minute){
//     document.body.innerHTML= `the time in the minutes ${minute}m`
//     }
   
//     }
//   displaySeconds();
  