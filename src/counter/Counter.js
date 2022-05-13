import React, {useState, useEffect} from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = (props) => {
    const [count, setCounter] = useState(props.init);

    const Increase = () => {
        setCounter(count+props.gap);
    }

    const Decrease = () => {
        setCounter(count-props.gap);
    }

    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch("/foo")
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });
    }, []);

    return (
        <div>
            <h1>{message}</h1>
            <h2>{count}</h2>
            <button onClick={Increase}>+</button>
            <button onClick={Decrease}>-</button>
            <OddEvenResult count={count}/>
        </div>
    );
}

export default Counter;
