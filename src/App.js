import React, { useState } from "react";

import IncompletedTask from './IncompletedTask/IncompletedTask';
import CompletedTask from './CompletedTask/CompletedTask';
import InputAndAdd from './InputAndAdd/InputAndAdd';
import NumberOfTasks from './NumberOfTasks/NumberOfTasks';
import './App.css';



function App() {

  const [ activeTasks] = useState([
    { text: "Task1",  dueDate: "2020-06-01" },
    { text: "Task2",  dueDate: "2020-07-01" },
    { text: "Task2",  dueDate: "2020-05-01"}
  ]);

  const [ completedTasks] = useState([
    { text: "Task1",  dueDate: "2020-06-01" },
    { text: "Task2",  dueDate: "2020-07-01" },
    {text: "Task3",  dueDate: "2020-06-01" },
    { text: "Task4",  dueDate: "2020-07-01" },
    { text: "Task4",  dueDate: "2020-07-01" },
    { text: "Task5",  dueDate: "2020-05-01"}
  ]);



  const progressPrecentage= (activeTasks.length *100)/(activeTasks.length + completedTasks.length )

  

  
  return (

   


    <div className="main_div">
      
     
      <div className="headermargin">
      <InputAndAdd count={activeTasks.length+ completedTasks.length} progress={Math.round(progressPrecentage)} />
      </div>
      
      <NumberOfTasks  count={ activeTasks.length }  text=" Remained Tasks"/> 
      <div className="list-group"> 

    
      <IncompletedTask text="First Task" />
      <IncompletedTask text="Second Task"/>
      <IncompletedTask text="Third Task"/> 
      </div>

      <NumberOfTasks count= { completedTasks.length } text="Completed Tasks" /> 

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
