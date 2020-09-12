import React from 'react'
import CountDown from './CountDown'

const Counter = () => <>
        <CountDown count={0} reset={10} tick={1000}/>
</>

export default Counter