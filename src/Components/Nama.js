const Nama = ({name, studentId}) => {
    return (
        <div>
        <div className = "TitBg">
        <div className ="TitText"> <h2> TODO Application</h2></div></div><br></br>
        <div className='nama'>{name} - {studentId}</div>
        </div>
    );
    
}

export default Nama;