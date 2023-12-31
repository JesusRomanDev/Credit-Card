const cardNumber = document.querySelector('#number');
const numberInp = document.querySelector('#card_number');

const cardName = document.querySelector('#name');
const nameInp = document.querySelector('#card_name');

const cardMonth = document.querySelector('#month');
const monthInp = document.querySelector('#card_month');

const cardYear = document.querySelector('#year');
const yearInp = document.querySelector('#card_year');

const cardCVC = document.querySelector('#cvc');
const cvcInp = document.querySelector('#card_cvc');

const submitBtn = document.querySelector('#submit_btn');

const completed = document.querySelector('.thank');
const form = document.querySelector('form');

numberInp.addEventListener('keyup', setCardNumber);
nameInp.addEventListener('input', setCardName);
monthInp.addEventListener('input', setCardMonth);
yearInp.addEventListener('input', setCardYear);
cvcInp.addEventListener('input', setCardCVC);
submitBtn.addEventListener('click', handleSubmit); //click en vez de submit, porque ahora tomamos el button y no el form

const btnContinue = document.querySelector('.continue');

if(btnContinue){
    btnContinue.addEventListener('click', ()=> location.reload())
}

function setCardNumber(e){
    cardNumber.innerText = format(e.target.value);
}

function setCardName(e){
    cardName.innerText = e.target.value;
}

function setCardMonth(e){
    cardMonth.innerText = e.target.value;
}

function setCardYear(e){
    cardYear.innerText = e.target.value;
}

function setCardCVC(e){
    cardCVC.innerText = e.target.value;
}

function format(s){
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function handleSubmit(e){
    e.preventDefault();
    if(!nameInp.value){
        nameInp.classList.add('error');
        nameInp.parentElement.classList.add('error_message');
    }else{
        nameInp.classList.remove('error');
        nameInp.parentElement.classList.remove('error_message');
    }
    if(!numberInp.value){
        numberInp.classList.add('error');
        numberInp.parentElement.classList.add('error_message');
    }else{
        numberInp.classList.remove('error');
        numberInp.parentElement.classList.remove('error_message');
    }
    if(!monthInp.value){
        monthInp.classList.add('error');
        monthInp.parentElement.classList.add('error_message');
    }else{
        monthInp.classList.remove('error');
        monthInp.parentElement.classList.remove('error_message');
    }
    if(!yearInp.value){
        yearInp.classList.add('error');
        yearInp.parentElement.classList.add('error_message');
    }else{
        yearInp.classList.remove('error');
        yearInp.parentElement.classList.remove('error_message');
    }
    if(!cvcInp.value){
        cvcInp.classList.add('error');
        cvcInp.parentElement.classList.add('error_message');
    }else{
        cvcInp.classList.remove('error');
        cvcInp.parentElement.classList.remove('error_message');
    }
    if(nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value){
        completed.classList.remove('hidden');
        form.classList.add('hidden');
    }
}