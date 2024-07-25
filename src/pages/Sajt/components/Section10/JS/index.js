export const start = ()=>{
    let items = document.querySelectorAll(".item");
let module = document.querySelector(".module");
let currentImg = document.querySelector(".current-img");
let modulePictureWrapper = document.querySelector(".module-picture-wrapper");
let j = 0;


Array.from(items).forEach((el)=>{
    el.addEventListener("mouseover",(k)=>{
        k.target.style.transform = "scale(1.2)";   
    });
    el.addEventListener("mouseout",(k)=>{
        k.target.style.transform = "scale(1)";   
    });
    
    el.addEventListener("click", openModule);
})

function openModule(){
    
    j = Array.from(items).indexOf(this) + 1;
    
    module.style.display = "block";
    let getSrc = `pictures/imageSec/img${j}.jpg`;

    let text = `<div class="module-img-holder">
    <div class="close">
        <i class="fa-regular fa-circle-xmark close-icon"></i>
    </div>
    <div class="left">
        <i class="fa-regular fa-circle-left left-arrow"></i>
    </div>
    <div class="right">
        <i class="fa-regular fa-circle-right right-arrow"></i>
    </div>
    <img src="${getSrc}" class="current-img">
</div>`;

    modulePictureWrapper.innerHTML = text;

    closeModule();
    moveRight();
    
}

let closeModule = () => {
    let closeM = document.querySelector(".close-icon");
    closeM.addEventListener("click",()=>{
        module.style.display = "none";
    });
}

let moveRight = ()=>{
    let rightArrow = document.querySelector(".right-arrow");
    let leftArrow = document.querySelector(".left-arrow");

    leftArrow.addEventListener("click",leftRightArrowFunc);
    rightArrow.addEventListener("click",leftRightArrowFunc);
}

function leftRightArrowFunc(){

    if(this.classList[2] == 'right-arrow'){
        j++;
        this.parentNode.parentNode.classList.add("changePictureRight");
        prev = "prevRight";
        if( j === items.length + 1 ){ j = 1 }
    }else{
        j--;
        this.parentNode.parentNode.classList.add("changePictureLeft");
        prev = "prevLeft";
        if(j === 0){j = items.length}; 
    }

    let getSrc = `pictures/imageSec/img${j}.jpg`;
   
    let text = `<div class="module-img-holder ${prev}">
    <div class="close">
        <i class="fa-regular fa-circle-xmark close-icon"></i>
    </div>
    <div class="left">
        <i class="fa-regular fa-circle-left left-arrow"></i>
    </div>
    <div class="right">
        <i class="fa-regular fa-circle-right right-arrow"></i>
    </div>
    <img src="${getSrc}" class="current-img">
</div>`;


setTimeout(function(){
    modulePictureWrapper.innerHTML = text;
   closeModule();  
   moveRight();
},300);  
}
}




