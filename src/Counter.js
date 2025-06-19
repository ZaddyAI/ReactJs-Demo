import { useState } from 'react'
function Counter() {
    // useState is a hook that allows you to add state to functional components
    // const [state, setState] = useState(initialState);
    // useState returns an array with two elements: the current state and a function to update it
    // here setCounter is a function that updates the counter state
    // counter is the current state value
    const [counter, setCounter] = useState(0);
    // let counter = 0;
    const add = () => {
        //  console.log("Counter: ", counter);
        setCounter(counter + 1)
    }
    const sub = () => {
        //  console.log("Counter: ", counter);
        setCounter(counter - 1)
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <div className="buttons">
                <button onClick={add}>Increment</button>
                <button onClick={sub}>Decrement</button>
            </div>
        </>
    );
}
export default Counter;
