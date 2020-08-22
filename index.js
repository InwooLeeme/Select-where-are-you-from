
const body = document.querySelector('body'),
    select = document.querySelector(".select"),
    input = document.querySelector("option"),
    title = document.querySelector('.title');

const VALUE_LS = "currentCountry";

function setCountry(text){
    localStorage.setItem(VALUE_LS,text);
}


function getSelectValue(){
    const currentValue = select.value;
    setCountry(currentValue);
    changeBackground(currentValue);
}

function getCountry(){
    localStorage.getItem(VALUE_LS);
}

function changeBackground(text){
    if(text === 'KR'){
        title.innerText = `You are from Korea!`;
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1517868674985-0525518ae392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60')";
    }
    else if(text === 'JK'){
        title.innerText = `You are from Japan!`;
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60')";
    }
    else{
        title.innerText = `Your are from America!`;
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1526638684360-95cdcee762ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60')";
    }
}

function init(){
    select.addEventListener("change",getSelectValue);
}

init();

