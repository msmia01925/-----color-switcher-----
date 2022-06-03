

var switcher_btn = document.getElementById("switcher-btn");
var color_swicher=document.getElementById("color-switcher");


switcher_btn.addEventListener("click",function(){
   color_swicher.classList.toggle("active")
  
})


let themebtn = document.querySelectorAll('.theme-btn');


themebtn.forEach(color =>{
    color.addEventListener("click", () =>{
        let datacolor =color.getAttribute("data-color");
        document.querySelector(':root').style.setProperty('--main-color',datacolor);
    })
})




// themebtn.forEach(color =>{
//     color.addEventListener('click',() =>{
//         let datacolor = color.getAttribute("data-color");
//         document.querySelector(":root").style.setProperty('--main-color',datacolor);
//     })
// })