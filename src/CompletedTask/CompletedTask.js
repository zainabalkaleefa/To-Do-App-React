import React from 'react';
import './CompletedTask.css';

function CompletedTask(props) {
  return (




    <div className="container " align ="center">
      
    <div className= "row col-10 list-group-item d-flex justify-content-between align-items-center ">
        
               

    <div className="col-12 col-md-9 task-text1" align="center">
                  {props.text}
                  </div>
                  <div className="col-12 col-md-3" role="group" aria-label="Basic example" align="left">
                  <span class="badge badge-primary badge-pill content4"> Completed &#10003;</span>
                  </div>
              
    </div>  
  </div>
  );
}

export default CompletedTask;