import react, { useEffect, useState } from 'react';

function HookMouse(){

    const [x ,Setx] = useState(0)
    const [y ,Sety] = useState(0)

    const movement = (e) =>{
        console.log("Chal Jaaaaaaaaaaaaaaaa!")
        Setx(e.clientX)
        Sety(e.clientY)
    }
    
    useEffect(() =>{
        console.log('salam');
        window.addEventListener('mousemove', movement)
        

    return () =>{
        console.log("Ruk Jaaaaaaaaaaaaaaaaa!")
        window.removeEventListener('mousemove', movement);
    }
    } ,[])


    return(
        <h4>
            Hook X {x} , Hook Y {y}
        </h4>
    )
}


    export default HookMouse;