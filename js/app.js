

const btnCalculate = document.getElementById('calculate');
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothses');
const totoalExprese = document.getElementById('totoal-exprese');
const balance = document.getElementById('balance');
const remBalance = document.getElementById ('rem-balance');
const persent = document.getElementById('persent');
const save = document.getElementById('save');
const saveAmount = document.getElementById('save-amount');
const Remaining = document.getElementById('rem-balance');
const spend =  document.getElementById('spend');
const have = document.getElementById('have');
const youHave = document.getElementById('youhave')

btnCalculate.addEventListener('click',calculateHandler); 

function errorHandler(var1,var2) {
    document.getElementById(var1).style.display="flex";
    document.getElementById(var2).style.display= "block";
    return;
}


function calculateHandler() {

    const spendForFood = parseInt(food.value);
    const spendForRent = parseInt(rent.value); 
    const spendForClothse = parseInt(clothes.value); 
    
    const myIncome = parseInt(income.value); 

    const totoalSpend = spendForFood + spendForClothse + spendForRent ; 

    if(totoalSpend <= myIncome){
        totoalExprese.innerText = totoalSpend; 

        const newBalance = myIncome  - totoalSpend ; 
    
        balance.innerText = newBalance; 
    }
    else{
        const newBalance = myIncome  - totoalSpend ; 
        spend.innerText = newBalance;
        have.innerText = myIncome;
        document.getElementById('error-box').style.display="flex";  abc
        document.getElementById('error1').style.display= "block";   abc
        errorHandler('error-box', 'error1')
    }
    thisIsError();
}


save.addEventListener('click', saveMoney);      

function saveMoney(){

    const myIncome = parseInt(income.value);
    const numpersent = parseInt(persent.value);
    const balanceNew = parseInt(balance.innerText);
    
    let persentage = myIncome / 100 ; 

    const finulSaveAmmount =  persentage * numpersent ;

// error handeler
    if (finulSaveAmmount <= balanceNew) {
        saveAmount.innerText = finulSaveAmmount;

        Remaining.innerText = balanceNew - finulSaveAmmount;
    }
    else{
        
        const afterb = document.getElementById('afterb');
        afterb.innerText = myIncome;
        youHave.innerText = balance.innerText;

        errorHandler('error-box', 'error2'); 
    }
    thisIsError();
    
}

// error message 

document.getElementById('close').addEventListener('click', closeError);
function closeError(){
    document.getElementById('error-box').style.display="none";
}



function linkFrom(linkId) {
    linkId.style.border="2px solid red";
    linkId.setAttribute("placeholder", "Something Went Wrong");
    linkId.style.color="red";
    linkId.value = "";
}
function thisIsError() {
    if (!isNaN(income.value) !== true){
        linkFrom(income);
        
    }
    else if(!isNaN(food.value ) !== true){
        linkFrom(food);
    }
    else if(!isNaN(rent.value) !== true){
        linkFrom(rent);
    }
    else if(!isNaN(clothes.value) !== true){
        linkFrom(clothes);
    }
    else if(!isNaN(persent.value) !== true){
        linkFrom(persent);
    }
}

