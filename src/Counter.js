import { useEffect, useState } from 'react'

function Counter() {
    // useState is a hook that allows you to add state to functional components
    // const [state, setState] = useState(initialState);
    // useState returns an array with two elements: the current state and a function to update it
    // here setCounter is a function that updates the counter state
    // counter is the current state value
    const [counter, setCounter] = useState(0);

    // let counter = 0;
    // const add = () => {
    //     //  console.log("Counter: ", counter);
    //     setCounter(counter + 1)
    // }
    const sub = () => {
        //  console.log("Counter: ", counter);
        setCounter(counter - 1)
    }

    // using useEffect
    // useEffect is a hook that allows you to perform side effects in functional components
    // it takes a function as the first argument and an array of dependencies as the second argument
    // the function will be called after the component renders and whenever the dependencies change
    // in this case, we are logging the counter value to the console whenever it changes
    useEffect(() => {
        console.log(`Count is now: ${counter}`)
    }, [counter]);

    return (
        <>
            <div className="bg-red-400 text-white p-2 rounded-xl text-center mb-4">Counter: {counter}</div>
            <div className="flex justify-center gap-4 mb-4" >
                {/* <button onClick={add} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>Increment</button> */}
                <button onClick={() => setCounter(counter + 1)} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>Increment</button>
                <button onClick={sub} className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded'>Decrement</button>
            </div>
        </>
    );
}
export default Counter;
