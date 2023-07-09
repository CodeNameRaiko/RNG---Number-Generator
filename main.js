var Start = document.getElementById('start');
var resultButton = document.getElementById('submit-btn');
var amountInt = parseInt(amount.value);
/***********Page one transition*************/
Start.addEventListener('click', PageTransitionOne);
function PageTransitionOne() {
    let pageOne = document.getElementById('align'); 
    let pageTwo = document.getElementById('pageTwo');
    Start.classList.add('hide')
    pageOne.classList.add('hide')
    pageTwo.classList.remove('hidehide')
 }
/************************/

resultButton.addEventListener('click', functionTrain);

function functionTrain() {
    ResultsPop();
    const amount = document.getElementById('amount').value;
    for(var i = 1; i <= parseInt(amount); i++) {
        Results();    
    }
}


function ResultsPop() {
    let standardWidth = document.getElementById('res-svg');
    standardWidth.classList.add('container')
    standardWidth.classList.remove('bg-svg')
 }
function Results() {
    const fromNum = document.querySelector('#from').value;
    const toNum = document.querySelector('#to').value;
    const amount = document.getElementById('amount').value;
    randomNum = Math.floor(Math.random() * parseInt(toNum));
    if(! parseInt(fromNum) == "" && !parseInt(toNum) == "")  {
        if(randomNum >= parseInt(fromNum)) {
            generateElement();
        }  else {
            Results(); //Reloop until you get the right number for every click.             
        }   
    }  
} 
function generateElement() {
    const List = document.getElementById('listResults');
    randomNumEl = document.createElement('P'); 
    randomNumEl.append(randomNum); 
    List.append(randomNumEl);  
   } 
