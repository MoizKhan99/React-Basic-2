import { render } from '@testing-library/react'
import react, { useState } from 'react'

function Counter(){
const initialCount = 0;
const [count, useCount] = useState(initialCount)

function OnIncrement () {
  useCount(count +1 )
}

function OnDecrement () {
  useCount(count -1 )
}

function Reset(){
    useCount(initialCount)
}

        return(
            <div>
                <h1>Counter App</h1>
                <h3>{count}</h3>
                <button onClick={()=> Reset()}>Reset</button>
                <button onClick={()=> OnIncrement()}>Add</button>
                <button onClick={()=> OnDecrement()}>Sub</button>
            </div>
        )
    }

export default Counter;
