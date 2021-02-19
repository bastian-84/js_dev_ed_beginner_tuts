// ~~~~~~~~~~~ 09 DOM Manipulating ~~~~~~~~~~ //
// element to var
// bi Id
//const sText = document.getElementById('titleId');
// by class
const sText = document.querySelector(".titleClass");
// by querySelector
//const sText = document.querySelector('h3');

const b1 = document.querySelector('.changeColor');

// CSS direkte style Anweisung
//sText.style.color = 'lime';

// CSS Klassen-Angabe
//sText.classList.add('newClass');

// eventListener
// klassisch mit eigener fn
/* const fnAendere = function () {
 sText.classList.add('newClass');
}
b1.addEventListener('click', fnAendere);  */

// nach ES6
/* const fnAendere = () => {
    sText.classList.add('newClass');
}
b1.addEventListener('click', fnAendere);  */

// mit callback function
/* b1.addEventListener('click', function () {
    sText.classList.add('newClass');
}) */

// mit callback function, toggle
/* b1.addEventListener('click', function () {
    sText.classList.toggle('newClass');
}) */

// callback fn mit ES6
/* b1.addEventListener('click', () => {
    sText.classList.toggle('newClass');
})  */

//const userList = document.querySelectorAll('.clNameList li');
const userList = document.querySelector('.clNameList');
//console.log(userList);
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');


/* var indx;
for(indx of userList){
    indx.addEventListener('click', function(){
        //console.log(this);      // this, "LINKS", = indx 
        this.style.color = 'cyan';
    })
}  */

/* console.log(listInput.value); */

// Dynamic DOM Scripting
addListBtn.addEventListener('click', function(){
    // create 
    const newLI = document.createElement('li');
    
    // set attr
    const liContent = document.createTextNode(listInput.value);

    // append
    newLI.appendChild(liContent);

        // append li to user list
        userList.appendChild(newLI);
})