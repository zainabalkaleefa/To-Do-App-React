import React from 'react';
import './InputAndAdd.css';

function InputAndAdd() {
  return (


    <div className="container " align ="center">
        
        <div className="row"> 
            <h3 className="numberoftext_text"> (10) To Do Tasks: </h3>
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
