import React from 'react'
import Counter from './components/Counter'
import Hello from './components/hello/Hello'
import Counter2 from './components/counter/Counter'

import { Provider } from 'react-redux'
import TodoInput from './components/todos/TodoInput' 
import TodoList from './components/todos/TodoList' 
import store from './components/todos/store'
import ReduxCounter from './components/redux_counter/CounterContainer'

// const는 function 타입이다.
const App = () => {
  return <div>
    
  <Counter/>
  <Hello/>
  <Counter2/>
  <Provider store = { store }>
    <TodoInput/><br/>
    <TodoList/>
    <ReduxCounter/>
  </Provider>
  

</div>
  // return은 안보이지만 있다.
  // 빈값 return : undefined  

// let data = () => ({})
// const data = () => {{}}
}
export default App