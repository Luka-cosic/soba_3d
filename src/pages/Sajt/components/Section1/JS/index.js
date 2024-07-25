

export const start = (e) => {
    let topFixed = document.querySelector(".top-fixed");
    console.log(topFixed);
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
            topFixed.classList.add("change");
        } else {
            topFixed.classList.remove("change");
        }

    });
}