import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa'; // insert Trash Icon from React - Font Awesome "https://react-icons.github.io/icons?name=fa"
import './CompletedTask.css';



function CompletedTask(props) {
  function trashCompletedClick(){
    props.trashCompletedTask(props.id);

  }

  return (

    <div className="container " align ="center">
      <div className= "row col-10 list-group-item d-flex justify-content-between align-items-center ">

        <div className="col-12 col-md-6 task-text1" align="center">
          <span className=" line-through">{props.text}</span> 
        </div>

        <div className="col-12 col-md-5">
          <span className="badge badge-primary  content4 "> <FaRegCheckCircle/> Completed </span>
          <button className="badge badge-primary content4" onClick={trashCompletedClick}><FaRegTrashAlt/> Remove </button>
        </div>

      </div>  
   </div>
  );
}

export default CompletedTask;



// trash alternate