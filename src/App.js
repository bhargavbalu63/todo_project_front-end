
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
const [task, setTask]=useState([])

const [newtask, setNewtask]= useState("")


useEffect(
  ()=>
  {

   axios.get("https://todo-back-end-ytaj.onrender.com/").then(response=>setTask(response.data));   
      
  },[])

 const submitHandler= ()=>
    {
       axios.post("https://todo-back-end-ytaj.onrender.com/addtask", {todo:newtask}).then(response=> setTask(response.data))
       
    }
const deleteHandler=(id)=>
{

  axios.delete(`https://todo-back-end-ytaj.onrender.com/delete/${id}`).then(response=> setTask(response.data))

}
  return (
    <div className="App">


      <h1>MY TODO APP</h1>
   <form onSubmit={submitHandler}>
   <input placeholder='add your task Srija...' id="input" type="text" value={newtask} onChange={(e)=>setNewtask(e.target.value)} />
      <input id="submit" value="Add" type="submit"/>
   </form>
      

   {/* {task.map(item => (
     <div>
      {item.todo}
      </div>
   ))} */}

   
   {task.map((each)=>
   {

    return(
      <div key={each._id} id="task">

      <li >

         {each.todo}
          
        </li>
        <button id="delete" onClick={()=>deleteHandler(each._id)}>delete</button>
        </div>
    )


   })}
   
   
   




    </div>
  );
}

export default App;
