import React from 'react';

import './OwnStyleSheet.css'; // Import CSS



function fnOwnIndex() {

    /********** JS area **********/
    var sTest = 'Test output';

    console.log(sTest);


    return (

        <div>
            {/* ********** HTML area ********** */}
            <div className='container'>

                <h2>Area OwnIndex.js</h2>
                <div className='ownClass1'>Own div</div> {/* className instead of class */}

            </div>
        </div>
    )
}


export default fnOwnIndex; /* ********** Export ********** */
