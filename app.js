const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
         wrapper.style.transform = `translateX(${-25 * index}vw)`
    });
    
});