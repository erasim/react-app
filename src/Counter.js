import './Counter.css'
import {useState} from "react";
function Counter(){
  let [num, setNum]= useState(0);
  let incNum = () =>{setNum((num)+1);
  };
  let decNum = () => { setNum(num - 1);   }
 let handleChange = (e)=>{
   setNum(e.target.value); 
  }
   return(
    <>
       <div id='Navbar'>React App</div>
       <div id='count'>
    <button id="btn1" type="button" onClick={decNum}>-</button>
  <span id='text'  onChange={handleChange}>{num}</span>
    <button id="btn2" type="button" onClick={incNum}>+</button>
    </div>
   </>
  );
}
export default Counter;