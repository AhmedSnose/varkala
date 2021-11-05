 var swiper = new Swiper('.swiper-container', {
  speed: 700,

  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// menu bar toggel
let navButtonopen = document.getElementById('open-nav');
let navMenu = document.querySelector('.nav-menu');
let navButtonclose = document.getElementById('close-nav');




navButtonopen.addEventListener('click', (e)=>{

  navMenu.classList.toggle('active');

  e.preventDefault();

  e.stopImmediatePropagation();

});


navButtonclose.addEventListener('click',()=> {

  navMenu.classList.toggle('active');
  
});

window.addEventListener('click', ()=> {

  navMenu.classList.remove('active');
  
});


// cursor app 


let mouse = document.querySelector(".cursor-one");
let elHover = document.querySelectorAll("li");

window.addEventListener("mousemove", cursor );


function cursor(e) {
    
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";

}



let countDate = new Date().getTime() + 98176813;

function offerDay() {

  let noW = new Date().getTime();
  let gap = countDate - noW;

  let sec = 1000;
  let min = sec * 60;
  let hor = min * 60;
  let day = hor * 24;

  let d = Math.floor(gap / (day));
  let h = Math.floor((gap % (day)) / (hor));
  let m = Math.floor((gap % (hor)) / (min));
  let s = Math.floor((gap % (min)) / (sec));

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;

}

setInterval(offerDay, 1000)



// The CArt

let bagNumper = document.querySelector(".cart-span")
let bagNumperTow = document.querySelector(".cart-span-tow")

let carts = document.querySelectorAll(".stor .add-cart");
let cart = []
if( JSON.parse(localStorage.getItem("productsCart"))) cart = JSON.parse(localStorage.getItem("productsCart"))
// console.log(cart)

let products = [
  {
    id:0,
    name : "T-sheirt",
    price: "20",
    tag: "pr-1",
    inCarst : 0
  },
  {
    id:1,
    name : "Black blouse",
    tag: "pr-2",
    price: "30",
    inCarst : 0
  },
  {
    id:2,
    name : "College jacket",
    price: "40",
    tag: "pr-3",
    inCarst : 0
  },
  {
    id:3,
    name : "Blouse",
    price: "30",
    tag: "pr-4",
    inCarst : 0
  },
  {
    id:4,
    name : "White Tee",
    price: "40",
    tag : "pr-5",
    inCarst : 0
  },
  {
    id:5,
    name : "Sweater",
    price: "30",
    tag : "pr-6",
    inCarst : 0
  },
  {
    id:6,
    name : "Trucker jacket",
    tag : "pr-7",
    price: "40",
    inCarst : 0
  },
  {
    id:7,
    name : "Short top",
    tag : "pr-8",
    price: "40",
    inCarst : 0
  }
];

class Cart {
    constructor(cart){
      this.cart = cart
    }

   bagNum(){
    bagNumper.innerHTML = JSON.parse(localStorage.getItem("productsCart")).length
    bagNumperTow.innerHTML = JSON.parse(localStorage.getItem("productsCart")).length

   }

  saveToStorage(){
 
    for (let i = 0; i < carts.length; i++){
      carts[i].addEventListener("click", (e) => {
        e.preventDefault()
        if(products[i].inCarst === 0){
          products[i].inCarst++
          cart.push(products[i])
          bagNumper.innerHTML++
          bagNumperTow.innerHTML++
        } else cart.push(products[i].inCarst++) 
        let filt = cart.filter(e => typeof e == "object")
        localStorage.setItem("productsCart",JSON.stringify(filt))


      })

    }

  }
}
let c = new Cart()
c.saveToStorage()
c.bagNum()
