import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from './component/Card'
// import Title from './component/Title'
import './Title.css'
import OneCard from './component/OneCard'



// //comonent
// function Greetings() {
//   // return <h2>hey!brother</h2>
//   return (
//     < >
//       <h2>hey!joe</h2>
//       <h3>i wanna ...... </h3>
//       <h1>Describing Zayed khan</h1>
//       <Person></Person>
//       <Message></Message>

//     </>
//   )
// }
// function Person() {
//   return <h1>zayed khan</h1>
// }
// function Message() {
//   return <h1>Bangler Tiger</h1>
// }
// function App() {

//   return (
//     <>


//       <h3 className='text-center text-3xl'>Hello {5 + 5}</h3>
//       {/* <Greetings></Greetings>
//       <Greetings />
//       <button className=' btn btn-secondary'>click me</button> */}

//       {/* <Title></Title> */}

//       < >
//         <h1 className='text-4xl text-center'>WellCome to our Card</h1>
//         <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-12'>
//           <Card></Card>
//           <Card></Card>
//           <Card></Card>
//           <Card></Card>
//         </div>
//       </>

//     </>
//   )
// }
function App() {

  return (
    <>
      <h1 className='text-4xl text-center'>WellCome to our Card</h1>
//         <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 px-12'>
        <OneCard></OneCard>
      </div >
    </>


  )
}

export default App
