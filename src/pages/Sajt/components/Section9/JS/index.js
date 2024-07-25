export const start = ()=>{
    let videoPlay = document.querySelector(".video-play");
    let video2 = document.querySelector(".video-2");
    let videoAdress = document.querySelector(".video-adress")
    videoPlay.addEventListener("click",()=>{
        video2.play();
        videoAdress.style.display = "none";
    })
}

