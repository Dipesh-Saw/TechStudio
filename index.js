const navLinks=document.querySelector('.nav-links')
const menu=document.querySelector('.fa-bars');
const close=document.querySelector('.fa-times');
menu.addEventListener('click',()=>{
    navLinks.style.right="0px";
    menu.style.display="none";
    menu.style.transform="rotate(360deg)";
  
    close.style.display="block";

})
close.addEventListener('click',()=>{
    navLinks.style.right="-100%";
    close.style.display="none";
    close.style.transform="rotate(180deg)";
    // menu.style.transition="0.5s";
    menu.style.display="block";
})

