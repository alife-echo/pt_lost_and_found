let show = true
document.querySelector('.menu-toggle').addEventListener('click',()=>{
    
    let one = document.querySelector('.menu-toggle .one')
    let two = document.querySelector('.menu-toggle .two')
    let three = document.querySelector('.menu-toggle .three')
    let links_hidden = document.querySelector('.links-hidden')

    if(show === true){
        one.style.transform = 'rotate(45deg) translate(7px, 7px)';
        two.style.opacity = 0
        three.style.transform = 'rotate(-45deg) translate(8px,-10px)'
        links_hidden.style.display = 'block'
        show = false
    }
    else{
        one.style.transform = 'none';
        two.style.opacity = 1
        three.style.transform = 'none'
        links_hidden.style.display = 'none'
        show = true
    }
   
})