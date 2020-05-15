import React from 'react';
import './InputAndAdd.css';

function InputAndAdd(props) {
  return (

    <div className="container " align ="center">
        
        
          <p className="numberoftext_text1">  Tasks To Do : </p>
          <p  className=" number0fProgress"> {props.num} / {props.count} Completed</p>
          
        
        <div className="row"> 
          <div className="col-10 col-md-8">
            <div className="progress bar" >
            <div className="progress-bar bg-danger " role="progressbar" style={{width: `${props.progress}%`}} > <p className="precentage-on-bar">{props.progress}% {props.text}</p></div>
            </div>
          </div>
        </div>
       
        <div className= "row">
          <div className="col-10 col-md-8">
            <input type="text" className="form-control  content5"  name="text_name" placeholder=" Add a new Task"  aria-describedby ="inputGroup-sizing-Default"/>
          </div>
          <div className="col-10 col-md-2" >
            <button type="button" className="btn btn-danger content6" align="center"> <h4>  +  </h4>  </button>
          </div>
        </div>
              
    </div>
  );
}

export default InputAndAdd;
