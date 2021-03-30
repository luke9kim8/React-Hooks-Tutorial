import React, {useContext} from 'react'
import NumContext from '../App'


const ComponentC = () => {
  
  const dispatch = useContext(NumContext)
  return (
    <div>
        <button onClick={() => dispatch({type: "Square"})}>^</button>
        <button onClick={() => dispatch({type: "Sqrt"})}>rt</button>
        <button onClick={() => dispatch({type: "Zero"})}>zero</button>
    </div>
  )
}

export default ComponentC;