 import Todoitems from "./Todoitems";
 const Todoitems1=({todoitems,onDeleteClick})=>{
    return(
        <div className="items-container">
        {todoitems.map((items,index)=><Todoitems   key={index}   todoDate={items.date} todoName={items.name}  onDeleteClick={onDeleteClick}/>)}
        
        
 
         
        </div>
    )
 }
 export default Todoitems1;