const question=document.querySelectorAll('.card1')
question.forEach((items)=>{
    const button=items.querySelectorAll('button')
    button.forEach((btn) => {
        btn.addEventListener('click',()=>{
            question.forEach((item)=>{
                if(item!==items){
                    item.classList.remove('show')
                }
            })
            items.classList.toggle('show')
        })
    });
})