
window.onload=()=>{
    main();
}

function main(){
    const resetBtn = document.querySelector("#reset");
    const submitBtn = document.querySelector("#submit");
    const inputField = document.querySelector("#input-field");
    const outputResult = document.querySelector("#output-result");
    const resultBody = document.querySelector("#result-body")



    submitBtn.addEventListener("click",function(){
        const inputValue = inputField.value;
        
        if(inputValue == ''){
            alert("enter your name");
        } else{
            outputResult.innerHTML = inputValue;
            resultBody.style.display = "block"
            inputField.value = '';
        }
    });

    resetBtn.addEventListener("click",function(){
        inputField.value = '';
        resultBody.style.display = "none";
    });
}