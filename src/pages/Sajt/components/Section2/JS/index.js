

export const start = ()=>{
    let video = document.querySelector("video");
    let volOn = document.querySelector(".vol-on");
    let volOff = document.querySelector(".vol-off");
    
    volOff.addEventListener("click", ()=>{
        video.muted = false;
        volOn.style.display = "block";
        volOff.style.display = "none";
    })
    volOn.addEventListener("click", ()=>{
        video.muted = true;
        volOn.style.display = "none";
        volOff.style.display = "block";
    })
}