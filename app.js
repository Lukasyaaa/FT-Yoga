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

    if(document.querySelector(".intro")){
        document.querySelector(".intro").style.cssText = `padding-top: calc(${document.querySelector(".header").offsetHeight}px + 3.125rem);`
        if(isSmaller1098px){
            document.querySelector(".intro").style.cssText = `padding-top: calc(${document.querySelector(".header").offsetHeight}px + 2.5rem);`
        }
        if(isSmaller992px){
            document.querySelector(".intro").style.cssText = `padding-top: calc(${document.querySelector(".header").offsetHeight}px + 1rem);`
        }
        if(isSmaller768px && document.querySelector(".menu")){
            document.querySelector(".intro").style.cssText = `padding-top: ${document.querySelector(".header").offsetHeight}px;`
            document.querySelector(".menu").style.cssText = `padding-top: calc(${document.querySelector(".header").offsetHeight}px + 2.8125rem);`
        }
    }

    if(document.querySelector(".burger") && document.querySelector(".header") && document.querySelector(".menu__line")){
        document.documentElement.addEventListener("click", (e) => {
            if(e.target.closest(".burger")){
                document.body.classList.toggle("_locked");
                document.querySelector(".header").classList.toggle("_active");
                document.querySelector(".header").classList.add("_interactive");
                if(document.querySelector(".header").classList.contains("_active")){
                    document.querySelector(".menu__line").style.cssText = `top: ${document.querySelector(".header").offsetHeight}px;`
                }
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