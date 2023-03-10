import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'


const Task = ({task, compT, setUpdate, removeT}) => {
  
    return( 
        <>
        {/* <button onClick = {()=> FilterAll()}>All</button> */}
        
        {/* <button>All</button>
        <button>Completed</button>
        <button>Incompleted</button> */}
        {task && task
      // Just in case ID not sorted
      .sort((a,b)=> a.id> b.id ? 1 : -1)

      .map((t,index) =>{
        return(
        <React.Fragment key ={t.id}>
          
          <div className ="column bgtask">
            <div className={t.status ? 'done' : ''}>
            
            <span className = 'Texttask'>
            {t.title}
          </span>
            </div>
          <div className ="icon">
          <span onClick = {()=> compT(t.id)}
          title ="Completed / Not"><FontAwesomeIcon icon ={faCircleCheck}/></span>
          {/* if task status is true, edit icon will be gon */}
          {t.status ? null :(
          <span title ="Edit "
          onClick= {()=> setUpdate({
            id:t.id,
            title:t.title,
            status: t.status ? true : false
          })}
          ><FontAwesomeIcon icon ={faPen}/></span>
          )}
          <span title ="Delete"
          onClick = {()=>removeT(t.id)}><FontAwesomeIcon icon ={faTrashCan}/></span>
          </div>

          </div>         
        </React.Fragment>
        )
            })
        }
        </>
    )
}

export default Task;