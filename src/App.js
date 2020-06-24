import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import IncompletedTask from './IncompletedTask/IncompletedTask';
import CompletedTask from './CompletedTask/CompletedTask';
import InputAndAdd from './InputAndAdd/InputAndAdd';
import NumberOfTasks from './NumberOfTasks/NumberOfTasks';
import axios from 'axios';
import './App.css';


function App() {

  // const [ activeTasks,setActiveTasks] = useState([
  //   { text: "Task1", completed: false,  dueDate: "2020-06-01", id:uuidv4()},
  //   { text: "Task2",completed: false,  dueDate: "2020-07-01", id:uuidv4()},
  //   { text: "Task3", completed: false, dueDate: "2020-05-01", id:uuidv4()}
  // ]);
  // const [ completedTasks, setCompletedTasks] = useState([]);

  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  ////////////////////// Get tasks  //////////////////////
  useEffect(() => {
    axios
      .get('https://wtcm5r9agk.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then(//request is successful
        response => {
          console.log(response.data);
          const remainTasks = response.data.Tasks.filter(task => task.completed === 0);
          setActiveTasks(remainTasks);
          const finishTasks = response.data.Tasks.filter(task => task.completed === 1);
          setCompletedTasks(finishTasks);
        })
      .catch(// an error
        (error) => {
          console.log('Error getting data', error)
        }
      )
      .finally(() => console.log("I am done"))
  }, []);

  
  const progressPrecentage = (completedTasks.length * 100) / (completedTasks.length + activeTasks.length)


  /////////////////////////////////// DELETE Incompleted task /////////////////////////////
  function deleteTask(taskId) {
    // const updateTasks = activeTasks && activeTasks.filter(task => task.taskId !== id); // filter the tasks if there are tasks
    // setActiveTasks(updateTasks);
    axios
      .delete(`https://wtcm5r9agk.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`)
      .then(response => {
        const updateTasks = activeTasks.filter(task => task.taskId !== taskId);
        setActiveTasks(updateTasks);
      })
      .catch((error) => {
        console.log("Could not delete task", error);
      });
  }


  ///////////////////////////////////////////// Complete a task ////////////////////////////////////
  function completeTask(taskId) {

    const updateTheTask = activeTasks.find(task => task.taskId === taskId);
    updateTheTask.completed = true;

    axios
      .put(`https://wtcm5r9agk.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`, updateTheTask)
      .then(response => {
        const updateTasks = activeTasks.filter(task => task !== updateTheTask);
        setActiveTasks(updateTasks);
        let completedTask = [...completedTasks, updateTheTask];
        setCompletedTasks(completedTask);
      })
      .catch(error => {
        console.log("Could not update the task", error);
      });


  }
  /////////////////////////////////////// Post (add) a task  ///////////////////////////////////
  function addTask(text) {
    const newTask = {
      text: text, completed: false
      //  ,id:uuidv4()
    }
    axios
      .post("https://wtcm5r9agk.execute-api.eu-west-2.amazonaws.com/dev/tasks", newTask)
      .then(  // if the request is successful, get the taskId and set it to the new task
        (response) => {
          newTask.taskId = response.data.task[0].taskId;
          const updatedTask = [...activeTasks, newTask];
          setActiveTasks(updatedTask);
        }
      )

      .catch((error) => {
        console.log("Error adding a task", error)
      })
  }

  /////////////////////////////////////// Delete a completed task ///////////////////////////////////
  function trashCompletedTask(taskId) {

    axios
      .delete(`https://wtcm5r9agk.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`)
      .then(response => {
        const updateTasks = completedTasks.filter(task => task.taskId !== taskId);
        setCompletedTasks(updateTasks);
      })
      .catch((error) => {
        console.log("Could not delete task", error);
      });

  }
  return (

    <div className="main_div">
      <div className="headermargin">
        <InputAndAdd
          addTask={addTask}
          num={completedTasks.length}
          count={activeTasks.length + completedTasks.length}
          progress={Math.round(progressPrecentage)}
          text={<big> &nbsp;Completed </big>} />
      </div>

      <NumberOfTasks count={activeTasks.length} text=" Remained Tasks" />

      <div>
        {activeTasks.map(task => <IncompletedTask
          completeTask={completeTask}
          deleteTask={deleteTask}
          taskId={task.taskId}
          key={task.taskId}
          text={task.text} />)}
      </div>

      <NumberOfTasks count={completedTasks.length} text="Completed Tasks" />

      <div>
        {completedTasks.map(task => <CompletedTask
          key={task.taskId}
          text={task.text}
          taskId={task.taskId}
          trashCompletedTask={trashCompletedTask} />)}
      </div>

      <footer>&copy; Tech Returner 2020 - Zainab Noori</footer>




    </div>
  );
}

export default App;
