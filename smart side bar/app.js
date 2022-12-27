const sideBar = document.querySelector(".sidebar")
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");



btn.addEventListener("click",function(){
    btn.classList.toggle("click");
    sideBar.classList.toggle("active");
    container.classList.toggle("active");
})


console.log(container)