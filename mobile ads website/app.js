const circle = document.querySelector("#circle");
const upBtn = document.querySelector("#upbtn");
const downBtn = document.querySelector("#downbtn");


let rotateValue = circle.style.transform;
let rotateSum;


upBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}