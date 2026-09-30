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
// https://script.google.com/macros/s/AKfycbyWcZjxaYWvh0UTjViemIVjGb6DKYnDScbChqV10E6A9MPmbyqZNIG7JEkdT87BO3e2/exec
const CardContainer = document.getElementById("card-container");
console.log(CardContainer);

CardContainer.innerHTML =" ";
async function coffee() {
    try {
        console.log("Fetching data...");
        
        const URL = await fetch("https://script.google.com/macros/s/AKfycbyWcZjxaYWvh0UTjViemIVjGb6DKYnDScbChqV10E6A9MPmbyqZNIG7JEkdT87BO3e2/exec");
        const data = await URL.json();
        console.log(data);
        console.log("Complete data.");
        data.forEach(cafe => {
            console.log(cafe);
            row = `
            <div class="card">
                    <img src="${cafe.photo}}" alt="">
                    <h4>${cafe.name}</h4>
                    <span>${Number(cafe.price).toLocaleString()} MMK</span>
                </div>
            `;
            CardContainer.innerHTML += row;
        });
    } catch (error) {
        console.log("Error fetching");
        
    }
}
coffee();