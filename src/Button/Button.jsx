import React from "react";

function Button({ className, label, onClick }) {
    return (
        <button className={`button ${className}`}
                onClick={onClick}>{label}</button>
    );
}

export default Button;