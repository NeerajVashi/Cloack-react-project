import React, { Component } from 'react';
import './clock.css'
class clock extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            time: '',
            dateOrTime:'Time',
        }

    this.dateOrTime = this.dateOrTime.bind(this);
    this.fun = this.fun.bind(this);
    }

    showFile(value) {
        console.log('value',value);
        this.setState({
            [value]: value,
        })
    }

    hideFile(value) {
        console.log('value', value);
        this.setState({
            [value]: value,
        })
    }

    fun() {
        if (this.state.dateOrTime === "Time") {
            const time = new Date().toLocaleTimeString();
            this.setState({
                time: time,
            })
        } else if (this.state.dateOrTime === "Date") {
            const date = new Date().toDateString();
            this.setState({
                time: date,
            })
        }

    }

    dateOrTime = () => {
        if(this.state.dateOrTime === 'Time') {
            this.setState({
                dateOrTime:"Date",
            })
        } else {
            this.setState({
                dateOrTime:"Time",
            })
        }
    }

    render() {
        setInterval(this.fun, 1000);
        return (
            <div className="mainContainer">
                <h1>Clock</h1>
                <button className="button" onClick = {this.dateOrTime}>{this.state.dateOrTime}</button>
                <div  className="container">
                    <div className="clock">
                        <div className="TimeParent">
                        <div className="Time">{this.state.time}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default clock;