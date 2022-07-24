import React from 'react';
import {useState} from "react";
import "./App.css";

export default function App(){
  const [list,setlist] =useState([]);
  const [currenttask,setcurrenttask]=useState(" ");

//add task function for button
let addtask=()=>{
  setlist([...list,{id: Math.random().toString(),name:currenttask,isDone:false}])
 
}
//markdone function 
let markdone=(id)=>{
  console.log("id",id);
  let itemIndex=list.findIndex(obj =>obj.id===id)
  //list[itemIndex].isDone = true;
  if(list[itemIndex].isDone===false){
    list[itemIndex].isDone=true;
  } else if(list[itemIndex].isDone===true){
    list[itemIndex].isDone=false;
  }
  setlist([...list])
}
//delete tsk function
const makedelete=(id)=>{
  // console.log("id",id)
  setlist(remove=>{
   return remove.filter((item)=> item.id !==id)})
  // setlist([...list]);
}

//function for creating button and text box

return(

<div className="container">
  <h1 className="head">TO DO APP</h1>
<input className="textbox" type="text" onChangeCapture={(e)=>setcurrenttask(e.target.value)} placeholder="Enter the task"/>
<button className="button"onClick={addtask}>ADD TASK</button>

<ul>
  {
    list.map((item)=>{
      return <li className={item.isDone ? 'markdone':' '}>
        {item.name}   <button className="bt-1" onClick={()=>markdone(item.id)}>Done</button>   <button className="bt-2" onClick={()=>makedelete(item.id)}>Delete</button></li>
    })
  }
</ul>

<img className="todo" src="http://www.clipartbest.com/cliparts/aTq/L7L/aTqL7LA8c.jpg"/>
<div className="footer"><h4>&copy; 2021-2022 |SABARINATHAN N |ALL Rights Reserved</h4></div>
</div>  


);

}
