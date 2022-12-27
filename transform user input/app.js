
let div = null;


window.onload = () => {
    main();
}

function main() {

    const body = document.querySelector("body");
    const chng =document.querySelector("#change");
    const output1 = document.querySelector("#output");
    const copy = document.querySelector("#copy");
    const copy2 = document.querySelector("#copy2");
    const output2 = document.querySelector("#output2");

    chng.addEventListener("click" ,function() {
        const deci = generatecolorDeci();
        const hex = generateColor(deci).toUpperCase();
        const dec = generateRGBdec(deci);

        body.style.backgroundColor = hex;
        output1.value = hex.substring(1);
        chng.style.backgroundColor = hex;
        output2.value = dec;
    });
    copy.addEventListener("click", function(){
        navigator.clipboard.writeText(`#${output.value}`);

        if(div !== null){
            div.remove();
            div = null;
        }

        if(isValidHax(output1.value)){
            toastmsggenarate(`#${output1.value} copied`);
        }else{
            alert("please input color code");
        };
    });
    copy2.addEventListener("click", function(){
        navigator.clipboard.writeText(`#${output2.value}`);

        if(div !== null){
            div.remove();
            div = null;
        }

        if(isValidHax(output1.value)){
            toastmsggenarate(`${output2.value} copied`);
        }else{
            alert("please input color code");
        };
    });
    output1.addEventListener("keyup", function(e){
        const color = e.target.value

        

        if(color){
            output1.value = color.toUpperCase();
            
            if(isValidHax(color)){
                body.style.backgroundColor = `#${color}`;
                output2.value = converhex(color);
            }
        }
    })

};
// toast mess start
function toastmsggenarate(msg) {
    
    div = document.createElement("div");
    div.innerText = msg;
    div.className = 'toast-mass toast-in';

    div.addEventListener("click",function(){
        div.classList.remove("toast-in");
        div.classList.add("toast-out");


        div.addEventListener("animationend",function(){
            div.remove();
            div = null;
        })
    })

    document.body.appendChild(div);
}
// toast mess end


// color generate
function generatecolorDeci(){
     const red = Math.floor(Math.random() * 255);
     const green = Math.floor(Math.random() * 255);
     const blue = Math.floor(Math.random() * 255);
     
     return {
         red,
         green,
         blue,
     }
};
// color generate end


// hex color code 
function generateColor({red,green,blue}) {
    

   

     const gettwoColor = (value)=> {
         const hex = value.toString(16);

         return hex.length == 1 ? `0${hex}` : hex; 
     }
    

     return `#${gettwoColor(red)}${gettwoColor(green)}${gettwoColor(blue)}`;
};
// hex color code


// rgb color code
function generateRGBdec({red,green,blue}){
    

    return `rgb(${red},${green},${blue})`;
}
// rgb color code
/**  convert hex color start
* @param {string} hex
*/

function converhex(hex) {
    const red = parseInt(hex.slice(0, 2),16);
    const green = parseInt(hex.slice(2, 4),16);
    const blue = parseInt(hex.slice(4),16);

    return `rgb(${red},${green},${blue})`;
}

// convert hex color end

/**
 * @param {string} color : ;
 */

function isValidHax(color){
    if(color.length !== 6)return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}
