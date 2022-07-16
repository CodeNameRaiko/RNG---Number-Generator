var startButton = document.getElementById('start')
var alignmentBtn = document.getElementById('align')
var divOne = document.getElementById('pageTwo')
var OkButton = document.getElementById('submit-btn')
var bgSVG = document.getElementById('res-svg')
var list = document.getElementById('list') 

// Startpage -> RNG Pannel
startButton.addEventListener('click', GetStarted)
function GetStarted() {
   startButton.classList.add('hide');
   alignmentBtn.classList.add('hide');
   divOne.classList.remove('hidehide');
}
//RNG Pannel -> results
OkButton.addEventListener('click', resultsPage)
function resultsPage() {
  bgSVG.classList.remove('bg-svg')
  bgSVG.classList.add('container')
}
//Results 
OkButton.addEventListener('click', results)
function results() {
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;
  let createdNum = parseInt(Math.floor(Math.random() * parseInt(to)));
  if( createdNum >= parseInt(from) ) {
    var listItem = document.createElement('p') 
    listItem.innerText = parseInt(createdNum); 
    listItem.classList.add('numbers')
  }
  var styleDiv = document.createElement('div')
  list.appendChild(styleDiv)
  styleDiv.appendChild(listItem)
  styleDiv.classList.add('styleDiv') 
} 
// Amount of 'results()' repeats
OkButton.addEventListener('click', rngRepeat) 





 
function rngRepeat() {
  const amount = document.querySelector('#amount').value 
  
  for (let i = 0; i < parseInt(amount); i++)
    results();  
}


