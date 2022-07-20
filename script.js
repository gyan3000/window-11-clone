const taskbar= document.getElementById("start");
const rightbar= document.getElementById("right");
const startmenu= document.getElementById("start-menu");
const righttransition= document.getElementById("right-upper");

taskbar.addEventListener("click",function(){
    console.log("click");
    if(startmenu.style.bottom=="45px"){
        startmenu.style.bottom="-100%";
    }
    else{
        startmenu.style.bottom="45px";
    }
})

rightbar.addEventListener("click",function(){
    console.log("click");
    if(righttransition.style.bottom=="45px"){
        righttransition.style.bottom="-100%";
    }
    else{
        righttransition.style.bottom="45px";
    }
})