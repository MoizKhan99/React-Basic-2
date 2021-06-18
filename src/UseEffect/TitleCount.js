import react, { useEffect, useState } from 'react'


function TitleCount (){
    const [count , UseCount] = useState(0);
    const [name , SetName] = useState('');
    useEffect(() =>{
        console.log("clicked")
        document.title = `You Clicked ${count} Times`;
    }, ([count]))
    return(
        <div>
            <input type="text" value={name} onChange={event => SetName(event.target.value)}/>
            <button onClick={() => UseCount(count+1)}>Count {count} times</button>
        </div>
    )
}

export default TitleCount