const menu = document.querySelector('#menu')
const background = document.querySelector('#background')
const sidenav = document.querySelector('#sidenav')
const close = document.querySelector('#close')

close.addEventListener('click', function(){
    background.style.transform = 'translateX(0px) scale(1)';
    background.style.filter = 'blur(0px)';
    sidenav.style.left = '-10%'
})

menu.addEventListener('click', function(){
    background.style.transform = 'translateX(100px) scale(.8) rotateY(-6deg) skewY(3deg)';
    background.style.filter = 'blur(1.2px)';
    sidenav.style.left = '2%';
})


