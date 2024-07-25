
export const start = ()=>{
    let section2 = document.querySelector(".section-2");
let events = document.querySelector(".events");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > window.outerHeight / 3){
        section2.classList.add("change")
    }
    if(window.pageYOffset > window.outerHeight){
        section2.classList.add("changeEvent")
    }    
});
}