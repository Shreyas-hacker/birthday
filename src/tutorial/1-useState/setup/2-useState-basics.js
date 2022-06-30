import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  const [text,setText] = useState('random title')
  const handleClick = ()=>{
    if(text === 'random title'){
      setText('Hello World')
    }else{
      setText('random title')
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>Change title</button>
  </React.Fragment>;
};

export default UseStateBasics;
