
window.onload = ()=>{
    main();
}

function main(){
    const featBtn = document.querySelector(".feat-btn");
    const servBtn = document.querySelector(".serv-btn");
    const featShow = document.querySelector(".feat-show");
    const servShow = document.querySelector(".serv-show");
    const all = document.querySelectorAll(".main");
    const btn = document.querySelector(".btn");
    const sideBar = document.querySelector(".sidebar");


    // console.log(all)
    featBtn.addEventListener("click", newFest(featShow,featBtn,servShow,servBtn));
    servBtn.addEventListener("click", newFest(servShow,servBtn,featShow,featBtn));
    btn.addEventListener("click",function(){
        btn.classList.toggle("click");
        sideBar.classList.toggle("showon")
    })
    
    all.forEach(function(el){

        el.addEventListener("click",function(){
            featShow.classList.remove("active");
            featBtn.classList.remove("active");
            servShow.classList.remove("active");
            servBtn.classList.remove("active");
        })
    })


};


function newFest(featShowp,featBtnp,servShowp,servBtnp){
     return function(){
        featShowp.classList.toggle("active");
        featBtnp.classList.toggle("active");
        servShowp.classList.remove("active");
        servBtnp.classList.remove("active");
     }

}
