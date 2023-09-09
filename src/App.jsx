import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Greetings() {
  return <h2>hey!brother</h2>
}
function App() {

  return (
    <>

      <h3 className='text-center text-3xl'>Hello</h3>
      <Greetings></Greetings>
      <Greetings />
      <button className=' btn btn-secondary'>click me</button>
    </>
  )
}

export default App
