const Update = ({update, changeT, UpdateT, cancel }) => {
    return( 
        <>
        <div className = "row">
        <div className = "col">
        <input 
        value = { update && update.title}
        onChange={ (e)=>changeT(e)}
        className ="from-control form-control-lg">
        </input> 
        </div> 
        <div className = "col-auto">
        <button 
        onClick = {UpdateT}
        className = "btn btn-lg btn-success mr-20"> Update </button>
        <button 
        onClick = {cancel}
        className = "btn btn-lg btn-warning"> Cancel </button>
      </div> 
      </div>
      <br/>
      </>
    )
}

export default Update;