// import './App.css'
import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems1 from "./components/Todoitems1";
import { useState } from "react";
import Messege from "./components/Messege";
function App() {
 
  //
  const [todoitems, settodoitems] = useState([]);
  const handelAdditems = (itemname, itemdate) => {
    // console.log(`this date ${itemname} ${itemdate}`);
    const newAdditems = [
      ...todoitems,
      {
        name: itemname,
        date: itemdate
      },
    ];
    settodoitems(newAdditems);
  };

  const handelDeleteItem =(todoitemName)=>{
   const newTodoItems =todoitems.filter((item)=>
   item.name!== todoitemName
  );
  settodoitems(newTodoItems);
  }  

  return (
    <>
      <center className="todo-container">
        <Appname />

        <Addtodo onbuttonClick={handelAdditems} />
        <Todoitems1 todoitems={todoitems}   onDeleteClick={handelDeleteItem}/>
        {todoitems.length === 0&&<Messege ></Messege>}
        
      </center>
    </>
  );
}

export default App;
