import React from 'react';
import './NumberOfTasks.css';

function NumberOfTasks(props) {
  return (


    <div className="container ">
        <div className= "row col-10  numberoftasks ">
           <div className="col-12 col-md-9 numberoftext_text" align="center">
                {props.text}
            </div>
        </div>  
    </div>
  );
}

export default NumberOfTasks;
