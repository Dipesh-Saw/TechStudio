const navLinks=document.querySelector('.nav-links')
const menu=document.querySelector('.fa-bars');
const close=document.querySelector('.fa-times');
menu.addEventListener('click',()=>{
    navLinks.style.top="40px";
    menu.style.display="none";
  
    close.style.display="block";

})
close.addEventListener('click',()=>{
    navLinks.style.top="-100%";
    close.style.display="none";
    menu.style.display="block";
})

