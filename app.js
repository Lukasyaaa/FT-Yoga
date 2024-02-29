document.addEventListener("DOMContentLoaded", () => {
    if(window.pageYOffset > 0 && document.querySelector(".header")){
        document.querySelector(".header").classList.add("_scrolled");
    }

    let isSmaller1098px = false;
    let isSmaller992px = false;
    let isSmaller768px = false;
    if(document.querySelector(".intro__subimage")){
        isSmaller1098px = getComputedStyle(document.querySelector(".intro__subimage")).display == "none";
    }
    if(document.querySelector(".intro__image")){
        isSmaller992px = getComputedStyle(document.querySelector(".intro__image")).display == "none"
    }
    if(document.querySelector(".menu")){
        isSmaller768px = getComputedStyle(document.querySelector(".menu")).position == "fixed";
    }

    if(document.querySelector(".burger") && document.querySelector(".header")){
        document.documentElement.addEventListener("click", (e) => {
            if(e.target.closest(".burger")){
                document.body.classList.toggle("_locked");
                document.querySelector(".header").classList.toggle("_active");
                document.querySelector(".header").classList.add("_interactive");
            }
        });
    }
    
    if(document.querySelector(".header")){
        document.addEventListener("scroll", () =>{
            if(window.pageYOffset > 0){
                document.querySelector(".header").classList.add("_scrolled");
            }else if(document.querySelector(".header").classList.contains("_scrolled")){
                document.querySelector(".header").classList.remove("_scrolled");
            }
        });
    }
});