const navbarEl=document.querySelector('.navbar')
const buttomContainerEl=document.querySelector('.buttom-container')

window.addEventListener('scroll',()=>{
    if(window.scrollY>buttomContainerEl.offsetTop-navbarEl.offsetHeight-50){
        navbarEl.classList.add("active")
    } else{
        navbarEl.classList.remove('active')
    }
})

