const img = document.querySelectorAll('.provisions')
const btn = document.querySelectorAll('.btn')


function size(){
    
    img.forEach(Element =>{
        Element.classList.toggle('provisions')
        Element.classList.toggle('full')
    })
}

btn.addEventListener('click', size)

