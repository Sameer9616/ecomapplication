//jshint esversion: 9
import React, { useState } from "react";

function Counter(props) {
    const [counter, setCounter] = useState(1);

    const increaseValue = () => {
        const temp = counter + 1;
        if (temp >= 9) {
            setCounter(9);
        } else {
            setCounter(temp);
        }
        props.setCounter && props.setCounter(counter);
    };
    const decreaseValue = () => {
        const temp = counter - 1;
        if (temp <= 0) {
            setCounter(1);
        } else {
            setCounter(temp);
        }
        props.setCounter && props.setCounter(counter);
    };

    return (
        <div className="counter h-100">
            <div className="d-flex border border-1 border-dark rounded-2 h-25 py-1">
                <div onClick={decreaseValue} className="prev fs-5 fw-bolder click-effect cursor-pointer px-3">
                    -
                </div>
                <div className="value fs-5 fw-bolder px-3">{counter}</div>
                <div onClick={increaseValue} className="next fs-5 fw-bolder click-effect cursor-pointer px-3">
                    +
                </div>
            </div>
        </div>
    );
}

export default Counter;
