const scoreTotal = document.querySelector("h2 span")
const mouse = document.querySelector(".mouse")
const holes = document.querySelectorAll(".hole")
// setInterval(changeColor, 2100);
let score = 0;
function run (){
    const i = Math.floor(Math.random()*holes.length);
    const hole = holes[i];
    
    let timer =  null;
    let img = document.createElement('img')
    img.classList.add('redCircle');
    img.src = './assets/redCircle.jpg'
    

    // img.classList.add('redCircle');
    // img.style.backgroundColor = 'red'
    // console.log(img);
        // circle.style.backgroundColor = "red";

    img.addEventListener("click", ()=>{
        score+= 1;
        scoreTotal.textContent = score
        // console.log(scoreTotal);
    });
    hole.append(img);

    timer = setTimeout(()=>{
        hole.removeChild(img)
        run()
    },1500) 
}
run();