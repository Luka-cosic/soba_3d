export const start = ()=>{

    let loop;
let circle = document.querySelectorAll(".circle");
let allPictures = document.querySelectorAll(".section-5-picture-wrapper");
let pause = document.querySelector(".fa-pause");
let play = document.querySelector(".fa-play");

let n = allPictures.length;

pause.addEventListener("click", stopInterval);
play.addEventListener("click", playInterval)
function movePicture() {
    document.querySelector(`.picture-${n}`).style.left = "-100%";
    document.querySelector(`.picture-${n}`).style.zIndex = "100";
    Array.from(allPictures).forEach((el,index,arr)=>{
        if(index != n){
            el.style.zIndex = "0"
        }
    })
    n--;
   
    
    if(n === 0){
        n = allPictures.length;
        Array.from(allPictures).forEach((el,index,arr)=>{
            el.style.left = "0"
        })
    }
    
    pagination();
}
loop = setInterval(movePicture, 3000);

function stopInterval(){
    pause.style.display = "none";
    play.style.display = "block";
    clearInterval(loop)
}
function playInterval(){
    pause.style.display = "block";
    play.style.display = "none";
    setInterval(movePicture, 6000);
}

const pagination = ()=>{
    Array.from(circle).forEach((el)=>{
        el.style.backgroundColor = "#808080";
    })
    circle[n - 1].style.backgroundColor = "white";  
}
}

