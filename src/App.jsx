import { useState, useEffect, useRef } from 'react'
import Navbar from './Components/Navbar'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);
 
  const a = useRef(0);
  const btnref = useRef();
  // useEffect(() => {
  //   alert('this will work when count change');
  //   setColor(color + 1);
  //   // return()=>{
  //   //   alert('function is didmount');
  //   // }
  // }, [count])
  useEffect(() => {
    btnref.current.style.backgroundColor = 'red';
    // a.current = a.current+1;
  // console.log(`Rerendering and the value of a is ${a.current}`);
  }, [])
  

  return (
    <>
      <Navbar color={ 'red' +color} />
      <div>{count}</div>
      <button ref={btnref}  onClick={()=> setCount(count+1)}>Click</button>
    </>
  )
}

export default App
