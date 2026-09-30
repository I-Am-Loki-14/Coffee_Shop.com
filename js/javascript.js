const Menubar = document.getElementById('menu-bar');
console.log(Menubar);
const Navlinks = document.getElementById('nav-links');
console.log(Navlinks);


Menubar.addEventListener("click",()=>{
    console.log("Clicked");
    
 Navlinks.classList.toggle('show')
})

// close function 
function closeMenu() {
    Navlinks.classList.remove('show')
}