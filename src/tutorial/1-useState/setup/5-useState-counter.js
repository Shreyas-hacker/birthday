import React, { useState } from 'react';

const UseStateCounter = () => {
  const [number,setNumber] = useState(0);

  const addNumber = ()=>{
    setNumber(number+1)
  }
  const subNumber = ()=>{
    if(number>0){
      setNumber(number-1)
    }
  }
  const complexIncrease = ()=>{
    setTimeout(()=>{
      // setNumber(number+1)
      setNumber((prevState)=>{
        return prevState+1;
      })
    },2000)
  }
  return (
    <>
      <section style={{margin:'4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{number}</h1>
        <button className='btn' onClick={addNumber}>Increase</button>
        <button className='btn' onClick={()=>setNumber(0)}>Reset</button>
        <button className='btn' onClick={subNumber}>Decrease</button>
      </section>
      <section style={{margin:'4rem 0'}}>
        <h2>More complex counter</h2>
        <h1>{number}</h1>
        <button className='btn' onClick={complexIncrease}>Increase later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
