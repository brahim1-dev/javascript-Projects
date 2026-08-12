
let openBtn = document.querySelector('.open-btn'),
    closeBtn=document.querySelector('.close-btn'),
    sideBar=document.querySelector('.navbar');


    
openBtn.addEventListener('click',()=>{
    sideBar.classList.toggle("navbar-active")
})

closeBtn.addEventListener('click',()=>{
    sideBar.classList.remove("navbar-active")
})