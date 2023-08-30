/*         category dropdown             */

const categoriiContainer = document.querySelector(".categorii__container div");
const categoriiContainerDropdown = document.querySelector(".dropdown")
const categoriiBTN = document.querySelector(".header__button button")

categoriiBTN.addEventListener("click", ()=>{
  console.log(categoriiContainer);
  categoriiContainer.parentElement.classList.toggle("d__none")
})

const getRenderDropdown = (el)=>{

  let categoriiName = document.createElement("a")
  categoriiName.href="./pages/category.html"
  categoriiName.textContent = el?.name;
  categoriiContainerDropdown.append(categoriiName);

  return categoriiContainerDropdown;
}


categories.map((el)=>{
  let card = getRenderDropdown(el)
  categoriiContainer.append(card)
})



/*   map tab    */

const tabButtons = document.querySelectorAll(".tab__button");
const tabContents = document.querySelectorAll(".tab__content");

let identife=0

const getTabContents = () =>{
  tabContents.forEach((el, i)=>{
    if (i !==identife) {
      el.style.display = "none";
      tabButtons[i].classList.remove("active__button")
    } else{
      el.style.display = "block"
      tabButtons[i].classList.add("active__button")
    }
  })
} 

getTabContents()

tabButtons.forEach((el, i)=>{
    el.addEventListener("click", ()=>{
      identife = i;
      getTabContents();
    })
  })



/* DISCOUNT CARD */

const cardDiscountProductList=document.querySelector(".card__discount__product__list")

let discountProducts = products.filter((pr)=>pr.discount).slice(-4);

const getDiscountCard = ()=>{
  cardDiscountProductList.innerHTML = discountProducts?.map((el)=>`
      <li class="card__product__item">
        <div class="product__item-img-box">
            <img src=${el.images[0]} alt=${el.name}>
            <span>
                <img src="./assets/img/static-icon/heart-card.svg" alt="">
            </span>
            <p>${el.discount} %</p>
        </div>

        <div class="product__item__buy-box">

            <div class="buy-box">
                <h4>${el.price} ₽</h4>
                <span>С картой</span>
            </div>

            <div class="buy__nodisc-box">
                <h4>50,50 ₽</h4>
                <span>Обычная</span>
            </div>
        </div>

        <div class="product__item__text-box">
            <a href= "#"><p>${el.description}</p></a>
            <div>
                <img src="./assets/img/static-icon/products-stared.svg" alt="">
                <img src="./assets/img/static-icon/products-stared.svg" alt="">
                <img src="./assets/img/static-icon/products-star.svg" alt="">
                <img src="./assets/img/static-icon/products-star.svg" alt="">
                <img src="./assets/img/static-icon/products-star.svg" alt="">
            </div>
            <button>
                В корзину
            </button>
        </div>
    </li>
  `).join( "")
}

getDiscountCard()


/* NEW CARD */

const cardNewProductList = document.querySelector(".card__new__product__list")

let newProducts = products.slice(-4) 

const getNewCard = () => {
  cardNewProductList.innerHTML = newProducts.map((el)=>`
        <li class="card__product__item">

          <div class="product__item-img-box">
              <img src=${el.images[0]} alt=${el.name}>
              <span>
                  <img src="./assets/img/static-icon/heart-card.svg" alt="">
              </span>
          </div>

          <div class="product__item__buy-box">
              <div class="buy-box">
                  <h4>${el.price} ₽</h4>
              </div>
          </div>

          <div class="product__item__text-box">
              <a href="#"><p>${el.description}</p></a>
              <div>
                  <img src="./assets/img/static-icon/products-stared.svg" alt="">
                  <img src="./assets/img/static-icon/products-stared.svg" alt="">
                  <img src="./assets/img/static-icon/products-star.svg" alt="">
                  <img src="./assets/img/static-icon/products-star.svg" alt="">
                  <img src="./assets/img/static-icon/products-star.svg" alt="">
              </div>
              <button>
                  В корзину
              </button>
          </div>
        </li>
  `).join("")
}

getNewCard()



/* PURCHASED CARD */

const cardPurchasedProductList = document.querySelector(".card__purchased__product__list")

let purchasedProducts = products.toSorted((el1, el2)=>el1.rating - el2.rating).slice(-4) 

console.log(purchasedProducts);

const getPurchasedCard = ()=>{
  cardPurchasedProductList.innerHTML = purchasedProducts.map((el)=>`
      <li class="card__product__item">

        <div class="product__item-img-box">
          <img src=${el.images[0]} alt=${el.name}>
          <span>
              <img src="./assets/img/static-icon/heart-card.svg" alt="">
          </span>
        </div>

        <div class="product__item__buy-box">
          <div class="buy-box">
              <h4>${el.price} ₽</h4>
          </div>
        </div>

        <div class="product__item__text-box">
            <a href = "#"><p>${el.description}</p></a>
            <div>
              <img src="./assets/img/static-icon/products-stared.svg" alt="">
              <img src="./assets/img/static-icon/products-stared.svg" alt="">
              <img src="./assets/img/static-icon/products-stared.svg" alt="">
              <img src="./assets/img/static-icon/products-stared.svg" alt="">
              <img src="./assets/img/static-icon/products-stared.svg" alt="">
            </div>
          <button>
              В корзину
          </button>
        </div>
    </li>
  `).join("")
}

getPurchasedCard()