import React from "react";
import './Counter.css';


function Counter({ className, label, count, onIncrease, onDecrease }) {
    return (
        <div className={`counter ${className}`}>
            <p>{label}: {count}</p>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

export default Counter;