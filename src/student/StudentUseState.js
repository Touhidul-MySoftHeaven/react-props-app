import { useState } from "react";
import '../index.css';


export default function StudentUseState(){

   let [data,setData]=useState('Touhidul');
  
   let updateData=()=>{
      setData('Touhidul islam Modified')
   }

   let [count,setCount]=useState(0);

   let updateCount=()=>{
       setCount(count+1)
   }

   return  (
    <div className="App">
    <div style={{backgroundColor: "yellowgreen",padding:"50px"}}>
        <div>{data}</div>
        <button onClick={updateData}>Click ME</button>
    </div>
    
    <div style={{backgroundColor: "#00FF00",padding:"50px"}}>
        <div>{count}</div>
        <button onClick={updateCount}>Click ME</button>
    </div>

    </div>
   );

}