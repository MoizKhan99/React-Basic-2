import React, { useContext } from 'react'
import Counter from './Hooks/Counter'
import TitleCount from './UseEffect/TitleCount'
import HookMouse from './UseEffect/HookMouse'
import MouseMove from './UseEffect/MouseMove'
import IntervalCounter from './UseEffect/IntervalCounter'
import DataFetching from './UseEffect/DataFetching'
import DataFetchingTwo from './UseEffect/DataFetchingTwo'
import DataFetching3 from './UseEffect/DataFetching3'
import './App.css';
import ComponentA from './UseContext/Component A'
import Counter1 from './UseReducer/Counter1'
import Counter2 from './UseReducer/Counter2'
import MultipleReducer from './UseReducer/MultipleReducer'
import Todo from './TodoApp/Todo'




export const UserContext = React.createContext() 
export const ChannelContext = React.createContext()

function App() {

  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <MultipleReducer /> */}
      {/* <Counter2 /> */}
      {/* <Counter1 /> */}
      {/* <UserContext.Provider value={'Moiz'}>
        <ChannelContext.Provider value={"Maths With Moiz"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching3 /> */}
      {/* <DataFetchingTwo /> */}
      <IntervalCounter />
      {/* <MouseMove /> */}
      {/* <HookMouse /> */}
      {/* <TitleCount /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
