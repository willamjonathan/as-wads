import './App.css';
import React, {useState} from 'react';


import Add from './Components/Add';
import Update from './Components/Update';
import Task from './Components/Task';
// import Filter from './Components/Filter';

function App() {
// The state
  const [task, setTask] = useState([
  ])

// temp state
  const [create, setCreate] = useState('');
  const [update, setUpdate] = useState('');


// FILTERING
  const [isComplete, setIsComplete] = useState(true);
  const [isIncomplete, setIsInComplete] = useState(false);
  


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


//  nunjukin semua
// const FilterAll= ()=>{

// }

// const FilterOr= (status)=>{
//   let isComplete = [...task];
//   if( status === true ){
//         // check status dong makanya !
//         // return ( { ...t, status: !t.status})
//         // temp2={...isComplete, status: isComplete.status}
//         // return setIsComplete(temp2);
//         return {...isComplete, status: isComplete.status};
//       }else if(status ===false){
//         // return ( { ...t, status: !t.status})
//         // temp2={...isComplete, status: isComplete.status}
//         // return setIsComplete(temp2);
//         return {...isComplete, status: isComplete.status};
//       }
//       setIsComplete(isComplete);
//     }

// const FilterOr= (status)=>{
// //   let temp = [];
// //   let temp2 = [];
// //   task.map ( t=> {
// //   if( status === true ){
// //     for (var i=0; i < task.length; task.id++) {
// //       let a = task[i].status === true
// //       temp = a
// //   } 

// //     return ( setIsComplete(temp));
// //   }else if(status ===false){
// //     for (var j=0; j < task.length; task.id++) {
// //       let b = task[j].status === false
// //       temp2 = b
// //     return ( setIsInComplete(temp2));
// //     // return setIsComplete(createTasks);
// //   }
// //   return t;
// // }})
// }
const FilterOr= (status)=>{
  if(status === true){
    // let createTasks = task.filter ( t => t.status !== status)
    // setIsComplete(createTasks);
    setIsComplete(isComplete);
  }else if(status === false){
    // let createTasks = task.filter ( t => t.status !== status)
    // setIsInComplete(createTasks);
    setIsInComplete(isIncomplete);
  }
}
// const FilterAll = ()=>{
//   <Task
//         task = {task}
//         compT = {compT}
//         setUpdate = {setUpdate}
//         removeT = {removeT}
//       />  
// }

// Filtering///////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container App">
      <div className = "TitBg">
      <div className ="TitText"> <h2> TODO Application</h2></div></div><br></br>
      <div className='nama'>William Jonathan - 2502045683</div>
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
      <button onClick={()=> FilterOr(true)}>Completed</button>
      <button onClick={()=> FilterOr(false)}>Todo</button>  
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
