let count=0;
const num=document.querySelector('span')
const button=document.querySelectorAll('.btn')
button.forEach((btns)=>{
    btns.addEventListener('click',(e)=>{
        const style=e.currentTarget.classList
        if(style.contains("decrease")){
            count--;
            num.style.color="red"
        }
        else if(style.contains("increase")){
            count++;
            num.style.color="green"
        }
        else{
            count=0;
            num.style.color="black"
        }
        num.innerText=count;

    })
})