import React from 'react'
import Counter from './components/Counter'
import Hello from './components/hello/Hello'
import Counter2 from './components/counter/Counter'

// const는 function 타입이다.
const App = () => <div>
  <Counter/>
  <Hello/>
  <Counter2/>

</div>
  // return은 안보이지만 있다.
  // 빈값 return : undefined  

// let data = () => ({})
// const data = () => {{}}

export default App