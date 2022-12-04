let open = document.querySelector(".menu");
let close = document.querySelector(".close-menu");
let navigation = document.querySelector(".navigation");i


openMenu = () => {
    if(open.style.display = "none"){
        navigation.style.display = "block";
    }else{
        navigation.style.display = "none";
    }
}

closeMenu = () => {
    if(close.style.display = "block"){
        navigation.style.display = "none";
        open.style.display = "block"
    }else{
        navigation.style.display = "block";
    }
}

open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

drop = () => {

}