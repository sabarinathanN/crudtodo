import React, { useContext } from "react";
import { Appcontext } from "../App";



function Form (title,btn){
    const{nameRef,dobRef,salaryRef,phoneRef}= useContext(Appcontext); 
  return (
   <>
   <div>
    <h1>{title}</h1>
      
    </div>
    <div>
      <label>Name</label><br/>
      <input type="text" placeholder='Enter Name..'  ref={nameRef}/>
    </div>
    <div>
      <label>Name</label><br/>
      <input type="text" placeholder='Enter Dob..'  ref={dobRef}/>
    </div>
    <div>
      <label>Name</label><br/>
      <input type="text" placeholder='Enter Salary..'  ref={salaryRef}/>
    </div>
    <div>
      <label>Name</label><br/>
      <input type="text" placeholder='Enter Phone..'  ref={phoneRef}/>
    </div>
    <div>
      <button onClick={()=>{

      if(btn === "Create"){
        console.log("Create")

      }
      else{
        console.log("Update2")
      }}
      
      }>{btn} </button>

     
    </div>
  
    </>
  );
}

export default Form