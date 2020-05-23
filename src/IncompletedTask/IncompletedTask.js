import React from 'react';
import './IncompletedTask.css';

function IncompletedTask(props) {

  function deleteClick(){
    console.log(props.id);
    props.deleteTask(props.id);
  }

  function completeClick(){
    props.completeTask(props.id);
    console.log(props.id);
  }
  return (
    <div className="container" align ="center">
      <div className= "row col-10 list-group-item d-flex justify-content-between align-items-center ">
        <div className="col-12 col-md-6  task-text"  align="center">
            {props.text}
        </div>
        <div className="col-12 col-md-5" >
            <button type="button" className="content3 btn btn-danger" onClick={completeClick}> Complete</button>
            <button type="button" className="content3 btn btn-danger " onClick={deleteClick} >  Delete  </button> 
        </div>
      </div>
    </div>
   
  );
}

export default IncompletedTask;
