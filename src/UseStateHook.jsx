// import React, { useState } from 'react'

// function UseStateHook() {

//     // const [count, setcount] = useState((0))
//     const [count, setcount] = useState(("islam"))
//     // console.log(count)
//     const handlePlus = () => {
//         // setcount(count + 1)
//         setcount("naeem")
//     }
//     const handleMinus = () => {
//         // const MinusValue = count - 1;
//         // if (MinusValue < 0) { alert("you can't go less than 0") }
//         // else
//         // setcount(MinusValue);
//         setcount("islam");
//     }

//     return (
//         <div>
//             <h1>count:{count} </h1>
//             <button onClick={handlePlus} className='btn btn-secondary mx-5 mb-5 '>Plus</button>
//             <button onClick={handleMinus} className='btn btn-secondary mb-5'> Minus</button>
//             {/*
//             { count == "1" && <h1>Naeem</h1>}
//             { count == "0" && <h1>islam</h1>} */}


//             {count == "naeem" && <h1>yes</h1>}
//             {count == "islam" && <h1>no</h1>}


//         </div>
//     )
// }

// export default UseStateHook
import React, { useState } from 'react';

function UseStateHook() {
    const arrayOfObjects = [
        { name: 'John', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
        { name: 'Eve', age: 28 },
        { name: 'Charlie', age: 40 },
        { name: 'Grace', age: 22 },
        { name: 'David', age: 32 },
        { name: 'Sophia', age: 29 },
        { name: 'Oliver', age: 37 },
        { name: 'Emma', age: 27 },
    ];

    const [data, setData] = useState(arrayOfObjects);
    console.log(data);

    return (
        <div className='text-4xl text-center my-2'>
            {arrayOfObjects.map((item) => (

                < div key={item.name} >
                    <h1>{item.name}</h1>
                </div>
            ))
            }
        </div >
    );
}

export default UseStateHook;
