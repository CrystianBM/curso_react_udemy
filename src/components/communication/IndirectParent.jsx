import React, { useState } from "react";
import { IndirectChild } from "./IndirectChild";

export function IndirectParent(props) {

    const [name, setName] = useState("?");
    const [age, setAge] = useState(0);
    const [working, setWorking] = useState(false);

    function sendInfo(name, age, working) {
        setName(name);
        setAge(age);
        setWorking(working)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{working ? "already working" : "not working yet"}!</span>
            </div>

            <IndirectChild onClick={sendInfo} />
        </div>
    )
}