import react, { useState } from 'react'
import HookMouse from './HookMouse';

function MouseMove(){

    const [display , setDisplay] = useState(true);


    return(
        <div>
            <button onClick={()=> setDisplay(!display)}>Stop</button>
            {display && <HookMouse />}
        </div>
    )
}


export default MouseMove;