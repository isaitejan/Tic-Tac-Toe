import React from 'react';
import "../App.css"

function Square({ data, chooseSquare }){
    return(
        <div className='square' onClick={chooseSquare}>{data}</div>
    );
}

export default Square;