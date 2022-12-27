window.onload=()=>{
    main();
};


function main(){
    const form = document.querySelector("form");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    
    form.addEventListener("submit",function(e){
        e.preventDefault();

        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if(checkEmail(emailValue)){
            email.parentElement.classList.add("form-control-succees");
            email.parentElement.classList.remove("form-control-fail");

        }else{
            email.parentElement.classList.add("form-control-fail");
            email.parentElement.classList.remove("form-control-succees");

        };

        if(passwordValue.length >= 6){
            password.parentElement.classList.add("form-control-succees");
            password.parentElement.classList.remove("form-control-fail");

        }else{
            password.parentElement.classList.add("form-control-fail");
            password.parentElement.classList.remove("form-control-succees");
        }

       
    });
    
};


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }




const ab = document.querySelector(".fa-check-circle");

