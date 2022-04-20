import React, { useEffect, useState } from "react";

const Contador = () => {
  console.log('Aquí hay un render del componente Contador');
  const [count, setCount] = useState(0)

  useEffect( () => {
    console.log(' [useEffect] El componente se montó');
    
  } , [])

  useEffect( () => {
    console.log(' [useEffect] El estado se cambió ...');
    
  } , [count])


  const addHandler = () => {
    console.log('Se está sumando.');
    setCount(count + 1)
  }

  const lessHandler = () => {
    console.log('Se está restando.');
    setCount(count - 1)

    if(count == 0){
      setCount(0)
    }
  }


  return (
    <>
      <div>Contador</div>
      <button onClick={lessHandler}> - </button>
      <strong> {count} </strong>
      <button onClick={addHandler}> + </button>
    </>
  )
}

export default Contador