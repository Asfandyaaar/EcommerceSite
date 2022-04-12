const nav = document.querySelector("#nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click",()=>{
    nav.classList.toggle("nav-active");
})


const navigation = document.querySelector("#header");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navigation.getBoundingClientRect().height;
    if(scrollHeight > 200){
        navigation.classList.add('fixed-nav');
    }
    else
    {
        navigation.classList.remove('fixed-nav');
    }

    if(scrollHeight > 300){
        toplink.classList.add("show-link");
    }
    else{
        toplink.classList.remove("show-link");
    }
})