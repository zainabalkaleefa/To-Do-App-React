import React from 'react';
import './IncompletedTask.css';

function IncompletedTask(props) {
  return (
    <div className="container" align ="center">
      <div className= "row col-10 list-group-item d-flex justify-content-between align-items-center ">
        <div className="col-12 col-md-8  task-text"  align="center">
            {props.text}
        </div>
        <div className="col-12 col-md-4" >
            <button type="button" className="content3 btn btn-danger" > Complete</button>
            <button type="button" className="content3 btn btn-danger " > Delete</button> 
        </div>
      </div>
    </div>
   
  );
}

export default IncompletedTask;
