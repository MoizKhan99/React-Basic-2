import react, { useEffect, useState } from 'react';

function IntervalCounter (){
    let [msec , setMsec] = useState(0);
    let [sec , setSec] = useState(0);
    let [mint , setMint] = useState(0);
    let [hour , setHour] = useState(0);
    let initial = 0;


    const tick = () =>{
        setMsec(msec++);
        console.log(msec);

        if(msec > 98){
            setMsec(initial);
            setSec(sec + 1);


        if(sec > 58){
            setSec(initial);
            setMint(mint + 1);
            
            if(mint > 58){
                setMint(initial);
                setHour(hour + 1);
            }
        }

    }

}

    
    useEffect(()=>{
        const interval = setInterval(tick , 10)

        return()=>{
            clearInterval(interval)
        }
    } , [sec])



    return(
        <div>
            <h1>{hour} : {mint} : {sec} : {msec}</h1>
        </div>
    )
}

export default IntervalCounter;