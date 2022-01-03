
///================================================================


let productsContainer = document.querySelector(".pizza");
let bagNumper = document.querySelector(".cart-span")
let ToT = document.querySelector(".ToT")
let stor = JSON.parse(localStorage.getItem("productsCart"))
let allPrice = document.querySelector(".allPrice");

!stor ? ( bagNumper.innerHTML = 'No Item Found' , ToT.style.display ='none') : null


let car = stor ? [...stor] : 1


class Utilities{
  localStr
  constructor(localStr){
    this.localStr = localStr
  }
  upDataCart(objs){
    localStorage.setItem("productsCart",JSON.stringify(objs))
    
  }

  removeItem(id){
        car = car.filter(item => item.id !==  id);
        this.upDataCart(car)
        this.upDateTotalPrice()

   }

  loadBagNum(){
    bagNumper.innerHTML = car.length ? car.length : "No Item"
  }


  upDateTotalPrice(){
    const allPriceNum = car.reduce((a,v,i)=>{
      return a + v.price * v.inCarst
    },0)
    allPrice.textContent=`${allPriceNum?'$'+allPriceNum:"No Price No item"}`
  }

 async loadItems(){
    this.localStr?.map((item) => {
          let TotalPrice = item.price * item.inCarst;      
          document.querySelector('.products').innerHTML += `
      
<figure class="pizza">

          <div class="pizza__hero">
          <i class="far fa-times-circle"></i>
          <img src="images/${item.tag}.jpg">
          </div>

          <div class="pizza__content">
          <div class="pizza__title">
            <h1 class="pizza__heading">${item.name}</h1>
            <div class="pizza__tag pizza__tag--1">#vegetarian</div>
            <div class="pizza__tag pizza__tag--2">#italian</div>
          </div>

          <p class="pizza__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          </p>

        <div class="pizza__details">
        <p class="pizza__detail"><span class="emoji">💰</span><span class='totala'>${TotalPrice}</span></p>
        <p class="pizza__detail"><span class="emoji">💼</span>        <span class="inCart">${item.inCarst}</span></p>

        <p class="pizza__detail"><span class="emoji">👆</span>
        <i class="fas fa-arrow-up"></i></p>
        <p class="pizza__detail"><span class="emoji">👇</span>
        <i class="fas fa-arrow-down"></i></p>
        </div>
        </div>
        <div class="pizza__price">$${item.price}</div>
      </figure>

          `;
          // i can also do it with onclick="decrease(i)"  
    })

    let remove = document.querySelectorAll(".fa-times-circle");
   
   for(let i = 0; i < remove.length; i++){
     remove[i].addEventListener("click",()=>{
       this.removeItem(this.localStr[i].id)
       document.getElementsByTagName('figure')[i].style.display = "none"
       this.loadBagNum()

     })

   }
  }

  decrease(){
    let cheviron_down = document.querySelectorAll(".fa-arrow-down")
    let inCart = document.querySelectorAll(".inCart")
    let len = cheviron_down.length
    let total = document.querySelectorAll(".totala") 

    for(let i = 0; i < len; i++){

      cheviron_down[i].addEventListener("click",()=>{
        
        if(inCart[i].textContent <= 1 ){
          document.getElementsByTagName('figure')[i].style.display = "none"
          this.removeItem(this.localStr[i].id)
          this.upDateTotalPrice()
          bagNumper.innerHTML--
          this.loadBagNum()

        } else {
          [this.localStr[i]].map(item => {
            let TotalPrice = (item.price * item.inCarst) - item.price;
            total[i].innerText = TotalPrice
      })
        inCart[i].textContent--
        this.localStr[i].inCarst--
        this.upDataCart(this.localStr)
        this.upDateTotalPrice()

        }

      })
  
    }

  }

  inCrease(){
    let cheviron_up = document.querySelectorAll(".fa-arrow-up")
    let inCart = document.querySelectorAll(".inCart")
    let len = cheviron_up.length
    let productsContainer = document.querySelectorAll(".pizzas");
    let total = document.querySelectorAll(".totala") 

      for(let i = 0; i < len; i++){

        cheviron_up[i].addEventListener("click",()=>{

        inCart[i].textContent++;
        this.localStr[i].inCarst++;
        this.upDataCart(this.localStr)
        this.upDateTotalPrice()

        total[i].textContent = this.localStr[i].inCarst * this.localStr[i].price


       })

      }

      


  }
 

}
document.addEventListener("DOMContentLoaded",()=>{
  let u = new Utilities(stor)
  u.loadBagNum() 

  u.loadItems().then(da=>{
    if(stor){
      u.removeItem()
      u.decrease()
      u.inCrease()
    }
  })
  
})
