import React, { useState, useEffect } from "react";

const FunctionComponent = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [timer, setTimer] = useState(0);
    // useEffect(() => {
    //   console.log("useEffect");
    // }, [counter, counter2]);

    useEffect(() => {
        const myTimer = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);

        return () => clearInterval(myTimer);
    }, []);

    useEffect(() => {
        console.log("Timer: ", timer);
    });

    const increase = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="box">
            <h2>Function Component</h2>
            <p>Counter: {counter}</p>
            <p>Counter2: {counter2}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={() => setCounter2(counter2 + 1)}>
                Increase Counter 2
            </button>
        </div>
    );
};

export default FunctionComponent;