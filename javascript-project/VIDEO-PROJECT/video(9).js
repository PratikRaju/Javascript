const videoSlide=document.querySelector('.switch')
const vdoBtn=document.querySelector('.switch-btn')
const videoContainer=document.querySelector('video')
const preLoader=document.querySelector('.preloader')
vdoBtn.addEventListener('click',()=>{
    if(!videoSlide.classList.contains('slide')){
        videoSlide.classList.toggle('slide')
        videoContainer.pause();
    }else{
        videoSlide.classList.remove('slide')
        videoContainer.play();
    }
})
window.addEventListener('load',()=>{
    preLoader.classList.add('hide')
})