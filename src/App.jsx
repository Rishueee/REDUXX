import React from 'react'
import './App.css'
import Counter from './Action'
import { Provider } from 'react-redux'
import { checkstore } from './reduxxx/store'

function App() {


  return (
    <>
    <Provider store ={checkstore}>
      <Counter />   
    </Provider>     
    </>
  )
}

export default App