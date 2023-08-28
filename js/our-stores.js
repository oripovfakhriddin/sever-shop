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




