import { getLogin, getPassword } from "./var.js";
import { validate } from "./functions.js";


//changeInputEvent Object
const isDisabledBtn = {
    flagLogin : false,
    flagPassword : false
}

function changeInputEvent (e){
    if(e.target.dataset.type === "login" && validate( new RegExp("^"+getLogin+"$"), e.target.value)){
        e.target.classList.remove("error")
        isDisabledBtn.flagLogin = true;
    }else if (e.target.dataset.type === "password" && validate( new RegExp("^"+getPassword+"$"), e.target.value)){
        e.target.classList.remove("error")
        isDisabledBtn.flagPassword = true;
    }else{
        e.target.classList.add("error");
        if(e.target.dataset.type === "login"){
            isDisabledBtn.flagLogin = false;
        }else if(e.target.dataset.type === "password"){
            isDisabledBtn.flagPassword = false;
        }
    }

    if(isDisabledBtn.flagLogin && isDisabledBtn.flagPassword){
        document.getElementById("disabled").disabled = false;
    }else{
        document.getElementById("disabled").disabled = true;
    }
}

function userLoginEvent () {
    sessionStorage.isLogin = true;
    document.location = "/"
}

function showModalEvent () {
    const modal = document.querySelector(".container-modal").classList.remove("hide")
}


export {changeInputEvent, userLoginEvent, showModalEvent}