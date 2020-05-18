import React, { useState } from "react";

import IncompletedTask from './IncompletedTask/IncompletedTask';
import CompletedTask from './CompletedTask/CompletedTask';
import InputAndAdd from './InputAndAdd/InputAndAdd';
import NumberOfTasks from './NumberOfTasks/NumberOfTasks';
import './App.css';



function App() {

  const [ activeTasks,setActiveTasks] = useState([
    { text: "Task1", completed: false,  dueDate: "2020-06-01", id:"001"},
    { text: "Task2",completed: false,  dueDate: "2020-07-01", id:"002" },
    { text: "Task3", completed: false, dueDate: "2020-05-01", id:"003"}
  ]);

  const [ completedTasks, setCompletedTasks] = useState([
    
  ]);


  const progressPrecentage= (completedTasks.length *100)/(completedTasks.length + activeTasks.length )
  
  function deleteTask(id){
    const updateTasks= activeTasks.filter(task => task.id !== id);
    setActiveTasks(updateTasks);
  }
  

  function completeTask(id){
    const updateTasks= activeTasks.filter(task => task.id !== id);
    setActiveTasks(updateTasks);
    
    const updateCompletedTasks= activeTasks.map(function task(task) {
     if(task.id === id) {completedTasks.push(task);}
    });
    
    setCompletedTasks(completedTasks);
    

  }
  return (

    <div className="main_div">
      <div className="headermargin">
      <InputAndAdd 
      num ={ completedTasks.length}  
      count={activeTasks.length+ completedTasks.length} 
      progress={Math.round(progressPrecentage)} 
      text={<big> &nbsp;Completed </big>}/>
      </div>
      
      <NumberOfTasks  count={ activeTasks.length }  text=" Remained Tasks"/> 

      <div> 
        {activeTasks.map( task => <IncompletedTask 
        completeTask={completeTask}
        deleteTask={deleteTask }
        id={task.id} key={task.id} 
        text={task.text}/>)}
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
