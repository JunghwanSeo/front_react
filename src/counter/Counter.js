import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = (props) => {
    const [count, setCounter] = useState(props.init);

    const Increase = () => {
        setCounter(count+props.gap);
    }

    const Decrease = () => {
        setCounter(count-props.gap);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={Increase}>+</button>
            <button onClick={Decrease}>-</button>
            <OddEvenResult count={count}/>
        </div>
    );
}

export default Counter;
