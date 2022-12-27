window.onload = () => {
    main();
};

function main() {
    const body = document.querySelector("body");
    const btn = document.querySelector("button");
    const input = document.querySelector("input");

    btn.addEventListener("click",function (){
        
        const bgcolor = colorDecgenarate();
        body.style.backgroundColor = bgcolor;
        input.value = bgcolor;
        btn.style.backgroundColor = bgcolor;
    })
};

function colorDecgenarate() {

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
};