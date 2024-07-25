export const start = ()=>{
    let section4 = document.querySelector(".section-4");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 2 * window.outerHeight){
        section4.classList.add("change");
    }
})
}