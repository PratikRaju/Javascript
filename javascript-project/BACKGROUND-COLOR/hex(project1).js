const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",]
const btn=document.querySelector('button')
const main=document.querySelector("main")
const textColor=document.querySelector('.simple-color')
btn.addEventListener('click',()=>{
        let hexcolor="#"
        for(let i=0;i<6;i++){
            hexcolor+=hex[CreateRandomNumber()]
        }
        // const RandomNumber=CreateRandomNumber()
        main.style.backgroundColor=hexcolor
        textColor.innerHTML=hexcolor
})
function CreateRandomNumber(){
    return Math.floor( Math.random()*hex.length)
}