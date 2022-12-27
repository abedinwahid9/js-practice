const selectManu = document.querySelectorAll("select");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

let alarmSet, isSetalarm = false;
ringtoune = new Audio("/alarm.mp3");



for(let i = 12;i > 0; i--){
    i = i < 10? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectManu[0].firstElementChild.insertAdjacentHTML("afterend",option)

}
for(let i = 59;i >= 0; i--){
    i = i < 10? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectManu[1].firstElementChild.insertAdjacentHTML("afterend",option)
  
}
for(let i = 2;i > 0; i--){
    let ampm = i == 1? "AM":"PM";
    let option = `<option value="${ampm}">${ampm}</option>`
    selectManu[2].firstElementChild.insertAdjacentHTML("afterend",option)
    
}

setInterval(()=>{
    const rgb = rbaColor();
    body.style.backgroundColor = rgb;

    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM";


    if(h >= 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10? "0" + h : h;
    m = m < 10? "0" + m : m;
    s = s < 10? "0" + s : s;

   

    h1.innerText = `${h}:${m}:${s} ${ampm}`;

    if(alarmSet == `${h}:${m} ${ampm}`){
        console.log("alarm ringing.....")
        ringtoune.play();
        ringtoune.loop = true;
    }



},1000);

btn.addEventListener("click", setAlarm)

function rbaColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
};


function setAlarm(){
    if(isSetalarm){
        alarmSet = "";
        ringtoune.pause();
        container.classList.remove("disable");
        btn.innerText = "Set alarm";

        return isSetalarm = false;
    }
    let time = `${selectManu[0].value}:${selectManu[1].value} ${selectManu[2].value}`;

    if(time.includes("hour") || time.includes("minute") || time.includes("am/pm")){
        return alert("please, select valid time and set alarm")
    };
    isSetalarm = true;
    alarmSet = time;
    container.classList.add("disable");
    btn.innerText = "Clear alarm"
    

}