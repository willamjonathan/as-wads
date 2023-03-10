import './App.css';
import React, {useState} from 'react';


import Add from './Components/Add';
import Update from './Components/Update';
import Task from './Components/Task';
import Nama from './Components/Nama';
// import Filter from './Components/Filter';

function App() {
// The state
  const [task, setTask] = useState([])
  const [allTaks, setAllTask] = useState([])

// temp state
  const [create, setCreate] = useState('');
  const [update, setUpdate] = useState('');


// FILTERING
  const [isComplete, setIsComplete] = useState(false);

// Add task
  const addT = () => {
    if(create){
      let num = task.length +1;
      let newEntry = { id:num, title: create, status:false}
      setTask([...task, newEntry])
      setCreate('');
    }
  } 
// Clear
  const clear = () => {
    setTask([])
  }
// Complete All button
  const AllIsComplete = () => {
    let create = task.map ( t=> {
        return ( {...t, status: true})
      })
      setTask(create)
  }
// Remove
  const removeT = (id) => {
    let createTasks = task.filter ( t => t.id !== id)
    setTask(createTasks);
  } 
// Completed
  const compT = (id) => {
    let create = task.map ( t=> {
        if( t.id === id ){
          return ( { ...t, status: !t.status})

        }
        return t;
    })
    setTask(create);
  } 
// Cancel up
const cancel = () => {
  setUpdate('');

}
// Change task for up
const changeT = (e) => {
  let newEntry = {
    id: update.id,
    title: e.target.value,
    status: update.status ? true : false
  }
  setUpdate(newEntry);
} 
// Update task
const UpdateT = () => {
    let filter = [...task].filter( t => t.id !== update.id);
    let upOb = [...filter, update]
    setTask(upOb);
    setUpdate("");
}   
// Filtering///////////////////////////////////////////////////////////////////////////////////

const FilterCompleted = (status)=>{
  if (status && !isComplete) {
    setAllTask(task)
    setIsComplete(true)
    let taskList = task.filter ( t => t.status === status)
    setTask(taskList)
  } else {
    setTask(allTaks)
    setIsComplete(false) 
  }  
}

const FilterTodo = (status)=>{
  if (status && isComplete) {
    setAllTask(task)
    setIsComplete(false)
    let taskList = task.filter ( t => t.status !== status)
    setTask(taskList)
  } else {
    setTask(allTaks)
    setIsComplete(true) 
  }
}


  return (
    <div className="container App">
      <Nama name={'William Jonathan Mulyadi'} studentId={'2502045683'}/>
      <br/>
      {/*Function*/}
      {/* Update Task */}
      {update && update ?(
      <Update 
        update={update}
        changeT={changeT}
        UpdateT = {UpdateT}
        cancel = {cancel}
       />
      ) :(
        <>
        <Add
        create = {create}
        setCreate={setCreate}
        addT={addT}
        />
        <br/>
        </>
      )}
      {/* UI  */}
      <div className='Explanation'>{task && task.length ?'': 'No Task...'  }</div>
      <br/>
      {/* <button onClick = {()=> FilterAll}>All</button> */}
      <button onClick={()=> FilterCompleted(true)}>Completed</button>
      <button onClick={()=> FilterTodo(true)}>Todo</button>  
      <br/><br/>
      <button onClick={()=> AllIsComplete()}>Complete All</button>  
      <button onClick={()=>clear()} >Clear</button>
      <Task
        task = {task}
        compT = {compT}
        setUpdate = {setUpdate}
        removeT = {removeT}
      />  
    </div>
  );
}

export default App;
