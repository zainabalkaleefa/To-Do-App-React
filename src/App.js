import React, { useState } from "react";

import IncompletedTask from './IncompletedTask/IncompletedTask';
import CompletedTask from './CompletedTask/CompletedTask';
import InputAndAdd from './InputAndAdd/InputAndAdd';
import NumberOfTasks from './NumberOfTasks/NumberOfTasks';
import './App.css';



function App() {

  const [ activeTasks] = useState([
    { text: "Task1", completed: false,  dueDate: "2020-06-01", id:"001"},
    { text: "Task2",completed: false,  dueDate: "2020-07-01", id:"002" },
    { text: "Task2", completed: false, dueDate: "2020-05-01", id:"003"}
  ]);

  const [ completedTasks] = useState([
    { text: "Task1",completed: true,  dueDate: "2020-06-01", id:"001" },
    { text: "Task2",completed: true,  dueDate: "2020-07-01", id:"002" },
    {text: "Task3",completed: true,  dueDate: "2020-06-01", id:"003" },
    { text: "Task4",completed: true,  dueDate: "2020-07-01", id:"004" },
    { text: "Task5",completed: true,  dueDate: "2020-07-01", id:"005" },
    { text: "Task6",completed: true,  dueDate: "2020-07-01", id:"006" },
    { text: "Task7",completed: true,  dueDate: "2020-07-01", id:"007" },
    { text: "Task8",completed: true,  dueDate: "2020-07-01", id:"008" },
    { text: "Task9",completed: true,  dueDate: "2020-05-01", id:"009"}
  ]);


  const progressPrecentage= (completedTasks.length *100)/(completedTasks.length + activeTasks.length )
  
  return (

    <div className="main_div">
      <div className="headermargin">
      <InputAndAdd num ={ completedTasks.length}  count={activeTasks.length+ completedTasks.length} progress={Math.round(progressPrecentage)} text={<big> &nbsp;Completed </big>}/>
      </div>
      
      <NumberOfTasks  count={ activeTasks.length }  text=" Remained Tasks"/> 

      <div> 
        {activeTasks.map( task => <IncompletedTask key={task.id} text={task.text}/>)}
      </div>

      <NumberOfTasks count= { completedTasks.length } text="Completed Tasks" /> 

      <div>
        {completedTasks.map( task => <CompletedTask key={task.id} text={task.text} />)}
      </div>

      <footer>&copy; Tech Returner 2020 - Zainab Noori</footer>

      
      
    
    </div>
  );
}

export default App;
