var startButton = document.getElementById('start')
var alignmentBtn = document.getElementById('align')
var divOne = document.getElementById('pageTwo')
var amount = document.getElementById('amount')
var OkButton = document.getElementById('submit-btn')
var bgSVG = document.getElementById('bg-svg')
var list = document.getElementById('list') 

startButton.addEventListener('click', GetStarted)
function GetStarted() {
   startButton.classList.add('hide');
   alignmentBtn.classList.add('hide');
   divOne.classList.remove('hidehide');
}

OkButton.addEventListener('click', resultsPage)
function resultsPage() {
  bgSVG.classList.remove('bg-svg')
  bgSVG.classList.add('container')
}

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




