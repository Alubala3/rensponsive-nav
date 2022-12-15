const links = document.querySelector('.links')
const openMenu = document.querySelector('.openMenu')
const linkItem = document.querySelectorAll('li')

linkItem.forEach(function(item){
    item.addEventListener('click', ()=>{
        links.classList.toggle('active')
    });
});

openMenu.addEventListener('click', ()=>{
    links.classList.toggle('active')
})