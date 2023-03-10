const Add = ({ create, setCreate, addT}) => {
    return( 
      <>
      <div className = "row">
        <div className = "col">
          <input 
          value ={create}
          onChange={(e)=> setCreate(e.target.value)}
          className ="form-control form-control-lg"/>
        </div>
      <div className = "col-auto">
        <button 
        onClick = {addT}
        className = "btn btn-lg btn-success"> Add Task</button>
      </div>
      </div>
      </>
    )
}

export default Add;