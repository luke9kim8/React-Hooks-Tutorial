import React, {useState, useReducer} from 'react'
import ComponentA from './components/ComponentA'
import NumReducer from './NumReducer'

const [reducer, init] = NumReducer;
export const NumContext = React.createContext(null);
const App = () => {
  // state1, setState1
  // const [num, setNum] = useState(0);
  const [num, dispatchNum] = useReducer(reducer, init);
  
  return (
    <NumContext.Provider value={dispatchNum}>
    <div>
      <h1>{num.value}</h1>
        <ComponentA/>
      <button onClick={() => dispatchNum({type: "Increment"})}>+</button>
      <button onClick={() => dispatchNum({type: "Decrement"})}>-</button>
      

    </div>

    </NumContext.Provider>
  )
}

export default App;
