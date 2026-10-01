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

const CardContainer = document.getElementById("card-container");
console.log(CardContainer);
const LoadingMessage = document.getElementById('loading-message');
console.log(LoadingMessage);
roww = `<h1 style="font-family:   Orbitron, sans-serif;text-align: center;color:#452829;" id="loading-message">loading...
    </h1>`
CardContainer.innerHTML += roww;
async function coffee() {
    try {
        console.log("Fetching data...");
        
        const URL = await fetch("https://script.google.com/macros/s/AKfycbyWcZjxaYWvh0UTjViemIVjGb6DKYnDScbChqV10E6A9MPmbyqZNIG7JEkdT87BO3e2/exec");
        const data = await URL.json();
        console.log(data);
        console.log("Complete data.");
        CardContainer.innerHTML ="";
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

const SliderContainer = document.querySelectorAll('.slider-cards .slider-card');
console.log(SliderContainer);
let index = 0;

function next() {
    index = (index + 1) % SliderContainer.length
    SliderContainer.forEach(slider => slider.classList.remove('active'));
    SliderContainer[index].classList.add('active');
}
function prev() {
    index = (index - 1 + SliderContainer.length) % SliderContainer.length
    SliderContainer.forEach(slider => slider.classList.remove('active'));
    SliderContainer[index].classList.add('active')
}
setInterval(next,3000)
