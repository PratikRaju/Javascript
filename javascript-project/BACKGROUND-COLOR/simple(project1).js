const color=["green","red","rgba(133,122,200)","#F15025"]
const btn=document.querySelector('button')
const main=document.querySelector("main")
const textColor=document.querySelector('.simple-color')
btn.addEventListener("click",()=>{
    const randomNumber=RandomNumber()
    main.style.backgroundColor=color[randomNumber]
    textColor.innerHTML=color[randomNumber]
})
function RandomNumber(){
    return Math.floor(Math.random()*color.length)
}