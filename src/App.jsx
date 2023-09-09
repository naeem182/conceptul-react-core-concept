import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//comonent
function Greetings() {
  // return <h2>hey!brother</h2>
  return (
    < >
      <h2>hey!joe</h2>
      <h3>i wanna ...... </h3>
      <h1>Describing Zayed khan</h1>
      <Person></Person>
      <Message></Message>

    </>
  )
}
function Person() {
  return <h1>zayed khan</h1>
}
function Message() {
  return <h1>Bangler Tiger</h1>
}
function App() {

  return (
    <>


      <h3 className='text-center text-3xl'>Hello {5 + 5}</h3>
      {/* <Greetings></Greetings> */}
      <Greetings />
      <button className=' btn btn-secondary'>click me</button>
    </>
  )
}

export default App
