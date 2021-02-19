import React from 'react';

import './OwnStyleSheet.css'; // Import CSS



function fnOwnIndex() {

    /********** JS area **********/
    // ~~~~~~~~~~~~~~ 03 fn , param ~~~~~~~~~~ //
    const sName = 'Dev Ed';

    function toUpper(paramText){
        const sUpperCased = paramText.toUpperCase();    // toUpperCase() = core fn
        console.log(typeof sUpperCased);
    }
    //toUpper(sName);

    // ~~~~~~~ 06 arr push( ) ~~~~~~~ //
   /*  const arrSchedule = [
        'Wake up',
        'Eat',
        'Film a video',
        'sleep'
    ]; */
   /*  arrSchedule.push('String added at the end of arr');
    console.log(arrSchedule);
    arrSchedule.pop();
    console.log(arrSchedule);
    arrSchedule.shift();
    console.log(arrSchedule);
    arrSchedule.unshift('Waking up again');
    console.log(arrSchedule); */
    //console.log(arrSchedule.indexOf('Eat'));
   /*  const film = arrSchedule.indexOf('Film a video');
    console.log(arrSchedule[film]);
    console.log(arrSchedule[2]); */

    // ~~~~~~~~~~~~~~~~ 07.1 obj ~~~~~~~~~~~~~~~ //
    /* const objUser = {
        name : 'Edwin',
        age : 24,
        married : false,
        purchases : [
            'phone',
            'car',
            'laptop'
        ],
        fnSayName : function(){
            //console.log(this);
            console.log(this.name);
        }
    };
    objUser.fnSayName(); */
    // ~~~~~~~~~~~~~~~ 08 loops ~~~~~~~~~~~~~~ //
   const arrNames = [
       'Ed',
       'John',
       'Maria',
       'Eliza',
       'Burrito',
       'Harry',
       'Mason'
   ];
   var indx;
   for (indx of arrNames){
        console.log(`index content is: ${indx}`);
        if(indx === 'Maria'){
            console.log(`Maria is the arr`);
            break;
        }
   } 
  








    return (

        <div>
            {/* ********** HTML area ********** */}
            <div className='container'>

                <h2>Area OwnIndex.js</h2>
                <div className='ownClass1' id='div1'>Own div</div> {/* className instead of class */}

               
            </div>
        </div>
    )
}


export default fnOwnIndex; /* ********** Export ********** */
