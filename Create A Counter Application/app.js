
let count = 0;


window.onload=()=>{
    main();
};

function main(){
    const outputNumber = document.querySelector("#output");
    const incrementBtn = document.querySelector("#increment-btn");
    const decrementBtn = document.querySelector("#decrement-btn");
    const incrementInt = document.querySelector("#increment-int");
    const decrementInt = document.querySelector("#decrement-int");


    

    incrementBtn.addEventListener("click",function(){

        if( incrementInt.value == ""){
            alert("please inter increment number");
            incrementInt.value = 1;        
        }

        const incrementValue = parseInt(incrementInt.value);      
        count += incrementValue;  
        outputResult(outputNumber);

       
        
    });

    decrementBtn.addEventListener("click",function(){
        const decrementValue = parseInt(decrementInt.value);
        count -= decrementValue;
        outputResult(outputNumber)
    });

    incrementInt.addEventListener("keyup",function(e){
        if(parseInt(e.target.value) > 100){
            e.target.value = 100;
        }

        if(parseInt(e.target.value) < 1){
            e.target.value = 1;
        }

        
    });

    decrementInt.addEventListener("keyup",function(e){
        if(parseInt(e.target.value) > 100){
            e.target.value = 100;
        }

        if(parseInt(e.target.value) < 1){
            e.target.value = 1;
        }

        
    })


};


function outputResult(output){
    if(count < 0){
        count = 0;
        alert("result can not be negetive")
    }

    let finalResult = count;

    if(count < 10){
        finalResult = `0${count}`
        
    }

    output.innerText = finalResult;

}

