console.log('aasan hai');

const bar = document.querySelector('.menu')
const cross = document.querySelector('.close')
const navlist = document.querySelector('.navlist')
const social = document.querySelector('.social')
const navbar = document.querySelector('.navbar')

const slider = document.querySelectorAll('.sliders')

console.log(slider);



// sliderMain();


bar.addEventListener('click',()=>{
    bar.style.display = 'none'
    cross.style.display = 'flex'
    social.style.display = 'flex'
    navlist.style.display = 'flex'
    
})
cross.addEventListener('click',()=>{
    bar.style.display = 'flex'
    cross.style.display = 'none'
    social.style.display = 'none'
    navlist.style.display = 'none'
})



