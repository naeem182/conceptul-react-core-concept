import React, { useState } from 'react'

function UseStateHook() {

    const [count, setcount] = useState((0))
    // console.log(count)
    const handlePlus = () => {
        setcount(count + 1)
    }
    const handleMinus = () => {
        const MinusValue = count - 1;
        if (MinusValue < 0) { alert("you can't go less than 0") }
        else
            setcount(MinusValue);
    }

    return (
        <div>
            <h1>count:{count} </h1>
            <button onClick={handlePlus} className='btn btn-secondary mx-5 mb-5 '>Plus</button>
            <button onClick={handleMinus} className='btn btn-secondary mb-5'> Minus</button>
        </div>
    )
}

export default UseStateHook
