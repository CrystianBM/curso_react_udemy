import "./input.css";
import React, { useState } from "react";

export function Input(props) {

    const [value, setValue] = useState("First");

    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div>
                <input value={value} onChange={onChange} /> <br />
                <input value={value} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}