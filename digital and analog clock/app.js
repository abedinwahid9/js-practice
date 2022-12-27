const sc = document.querySelector("#sc");
const mn = document.querySelector("#mn");
const hr = document.querySelector("#hr");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const ses = document.querySelector("#ses")


setInterval(function(){
    const day = new Date();
    let ss = day.getSeconds();
    let mm = day.getMinutes();
     hh = day.getHours();

    hr.style.transform = `rotateZ(${hh * 30+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm * 6}deg)`;
    sc.style.transform = `rotateZ(${ss * 6}deg)`;


    if(hh == 0){
        hh = 12
    }
    if(hh > 12){
        hh = hh-12
        ses.innerHTML = "PM";
    }

    hh = (hh < 10)? "0" + hh : hh;
    mm = (mm < 10)? "0" + mm : mm;
    ss = (ss < 10)? "0" + ss : ss;

    hour.innerHTML = hh; 
    minute.innerHTML = mm;
    second.innerHTML = ss;
},0)

// digital clock







