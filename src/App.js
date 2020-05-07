import React from 'react';
import IncompletedTask from './IncompletedTask/IncompletedTask';
import CompletedTask from './CompletedTask/CompletedTask';
import InputAndAdd from './InputAndAdd/InputAndAdd';
import NumberOfTasks from './NumberOfTasks/NumberOfTasks';
import './App.css';

function App() {
  return (
    <div className="main_div">
      
     
      <div className="headermargin">
      <InputAndAdd/>
      </div>
      

      <NumberOfTasks text=" (3)    Incompleted Tasks"/> 


      <div className="list-group"> 
      <IncompletedTask text="First Task" />
      <IncompletedTask text="Second Task"/>
      <IncompletedTask text="Third Task"/>
      </div>

      <NumberOfTasks text=" (5)    Completed Tasks"/> 

      <div>
      <CompletedTask text="First Task"/>
      <CompletedTask text="Second Task"/>
      <CompletedTask text="Third Task"/>
      <CompletedTask text="Forth Task"/>
      <CompletedTask text="Fifth Task"/>

      </div>

      <footer>&copy; Tech Returner 2020 - Zainab Noori</footer>

      
      
    
    </div>
  );
}

export default App;
