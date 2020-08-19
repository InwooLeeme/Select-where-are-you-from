
const body = document.querySelector('body'),
    select = document.querySelector(".select"),
    input = document.querySelector("option");

const VALUE_LS = "currentCountry";

function setCountry(text){
    localStorage.setItem(VALUE_LS,text);
}


function getSelectValue(){
    const currentValue = select.value;
    setCountry(currentValue);
}

function getCountry(){
    localStorage.getItem(VALUE_LS);
}

function init(){
    select.addEventListener("change",getSelectValue);
}

init();