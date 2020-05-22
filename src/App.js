import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import IncompletedTask from './IncompletedTask/IncompletedTask';
import CompletedTask from './CompletedTask/CompletedTask';
import InputAndAdd from './InputAndAdd/InputAndAdd';
import NumberOfTasks from './NumberOfTasks/NumberOfTasks';
import './App.css';



function App() {

  const [ activeTasks,setActiveTasks] = useState([
    { text: "Task1", completed: false,  dueDate: "2020-06-01", id:uuidv4()},
    { text: "Task2",completed: false,  dueDate: "2020-07-01", id:uuidv4()},
    { text: "Task3", completed: false, dueDate: "2020-05-01", id:uuidv4()}
  ]);

  const [ completedTasks, setCompletedTasks] = useState([]);
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

    function addTask(text){
     const newTask={text: text, completed: false,  id:uuidv4()} 
     const updatedTask=[...activeTasks, newTask];
     setActiveTasks(updatedTask);
     
     
    }
    
  return (

    <div className="main_div">
      <div className="headermargin">
      <InputAndAdd 
      addTask={addTask}
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
