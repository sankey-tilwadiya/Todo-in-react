

function Todoitem({todoDate,todoName,onDeleteClick}) 
{
   
  return ( 
    <div className="container">
       <div className="row">
          <div className="col-6">{todoName}
          </div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2"><button type="button" className="btn btn-danger"  onClick={()=>onDeleteClick(todoName)}>Delete</button>
           </div>
        </div>
    </div>
  )
}

export default Todoitem;