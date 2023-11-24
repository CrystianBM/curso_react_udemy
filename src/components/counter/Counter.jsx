import "./Counter.css";
import React, { Component } from "react";

import { DisplayNum } from "./DisplayNum";
import { Buttons } from "./Buttons";
import { PassForm } from "./PassForm";

class Counter extends Component {

    state = {
        number: this.props.initialNum || 0,
        pass: this.props.pass || 3,
    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.pass,
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.pass,
        })
    }

    setPass = (newPass) => {
        this.setState({
            pass: newPass,
        })
    }

    render( ) {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <DisplayNum number={this.state.number}/>
                <PassForm pass={this.state.pass} setPass={this.setPass} />
                <Buttons setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}

export default Counter;