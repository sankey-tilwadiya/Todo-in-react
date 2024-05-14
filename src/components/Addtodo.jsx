import { useState } from "react"


function Addtodo({onbuttonClick}) {
const[todoName,settodoName]=useState("")
const[duedate,setdueDate]=useState("")
const handleNameChanged=(event)=>{
settodoName(event.target.value)
}
const handleDatechanged=(event)=>{
setdueDate(event.target.value)
}
const handelAddButtonClicked=()=>{
onbuttonClick(todoName,duedate)
settodoName("")
setdueDate("")
}




  return (
    <div className="container-text-center">
       <div className="row">
          <div className="col-6"><input type="text" placeholder="enter your task"  onChange={handleNameChanged}  value={todoName}/>
          </div>
          <div className="col-4"><input type="date" onChange={handleDatechanged} value={duedate}/></div>
          <div className="col-2"><button type="button" className="btn btn-success"  onClick={handelAddButtonClicked}>Add</button>
           </div>
        </div>
    </div>
  )
}

export default Addtodo
