import reacr, { useReducer } from 'react'

const initialState = {
    firstCount : 0,
    secondCount : 5,
};
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return { ...state , firstCount: state.firstCount + action.value }
        case 'decrement':
            return { ...state , firstCount: state.firstCount - action.value }
        case 'reset':
            return initialState
        case 'increment2':
            return { ...state , secondCount: state.secondCount + action.value}
        case 'decrement2':
            return { ...state , secondCount: state.secondCount - action.value}
        default:
            return state
    }
}

function Counter2(){
    const [count , dispatch] = useReducer(reducer , initialState)
    return(
        <div>
            <h1>{count.firstCount}</h1>
            <h1>{count.secondCount}</h1>
            <button onClick={()=> dispatch({type : 'increment' , value : 1})}>
            Increment</button>
            <button onClick={()=> dispatch({type : 'decrement' , value : 1})}>
            Decrement</button>
            <button onClick={()=> dispatch({type : 'increment' , value : 5})}>
            Increment 5</button>
            <button onClick={()=> dispatch({type : 'decrement' , value : 5})}>
            Decrement 5</button>
            <div>
            <button onClick={()=> dispatch({type : 'increment2' , value : 1})}>
            Increment Counter 2</button>
            <button onClick={()=> dispatch({type : 'decrement2' , value : 1})}>
            Decrement Counter 2</button>
            </div>
            <button onClick={()=> dispatch({type :'reset'})}>Reset</button>
        </div>
    )
}

export default Counter2;