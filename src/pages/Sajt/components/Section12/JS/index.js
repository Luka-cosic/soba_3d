export const start = ()=>{
    let moveCardWrapper = document.querySelector(".move-card-wrapper");
let circlee = document.querySelectorAll(".circlee");

circlee.forEach((el, i)=>{
    el.addEventListener("click", ()=>{
        let r = i * 90
        moveCardWrapper.style.right = `${r}rem`;

        circlee.forEach((el)=>{
            el.classList.remove("change")
        })
        el.classList.add("change");
    })
    
})
}