const bars=document.querySelector('.hamberger')
const sideBar=document.querySelector('.sidebar')
const Cross=document.querySelector('.cross')
bars.addEventListener('click',()=>{
    sideBar.classList.toggle('come')
})
Cross.addEventListener('click',()=>{
    sideBar.classList.remove('come')
})