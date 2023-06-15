import React, { useState } from 'react'
import Display from './Display';

const Multiplier = () => {
    const[val,setVal] = useState(2);

    const handleUpdateVal=(mul)=>{
        setVal(val*mul);
    }
  return (
    <div>
        <h2>Multiplier</h2>
        <hr />
        <button onClick={()=>handleUpdateVal(2)}>x2</button>
        <button onClick={()=>handleUpdateVal(0)}>x0</button>
        <button onClick={()=>handleUpdateVal(8)}>x8</button>
        <button onClick={()=>handleUpdateVal(12)}>x12</button>
        <input type="number" name="" id="points" placeholder='points' onChange={(e)=>setVal(e.target.value)} />
        <hr />
        <Display score={val} />
    </div>
  )
}

export default Multiplier