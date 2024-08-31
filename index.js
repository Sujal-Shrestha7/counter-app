const element = document .getElementById('count-el');
const saveEl = document.getElementById('previous');
let savedValue = null;
let count = Number(element.innerText);
element.innerText = count;

function increase(){
  count = count + 1
  element.innerText = count;
}

function decrease(){
  if(count === 0){
    return 
  }
  count = count - 1
  element.innerText = count;
}

function reset(){
  count = 0 ;
  element.innerText = 0;
  saveEl.innerText = '';
  savedValue = null;
}

function save(){
  savedValue  = savedValue ?  `${savedValue} ${count} - ` : `${count} - `;
  saveEl.innerText ="Previous Saved value : " + savedValue
}