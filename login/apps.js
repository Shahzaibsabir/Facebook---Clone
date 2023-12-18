const signupform = document.querySelector("#signUpForm");

function tapCloseHandler(){

    signupform.classList.add("hidden")

}


function regFormHandler(){
    const regForm = document.getElementById("signUpForm").classList;

    regForm.remove("hidden")

    console.log("hellpo")

}