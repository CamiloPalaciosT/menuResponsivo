const menuToogle= document.querySelector('.menuToogle')
const navegacion = document.querySelector('.navegacion')

menuToogle.onclick =function(){
    navegacion.classList.toggle('open')
}
const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click', activarLink)
)