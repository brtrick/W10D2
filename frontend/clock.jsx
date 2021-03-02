import React from "react";


export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
        this.intervalId = null;

        this.tick = this.tick.bind(this);

    }

    render() {
        return (
            <>
                <h1 className="clock-header">The Time Is Now</h1>
                <ul className="clock-widgit">
                    <li className="clock-time">Time: <span>{this.state.date.toTimeString().slice(0,8)} EST</span></li>
                    <li className="clock-date">Date: <span>{this.state.date.toDateString()}</span></li>
                </ul>
            </>
        );
    }

    tick() {
        this.setState({date: new Date()});
    }

    componentDidMount(){
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        cancelInterval(this.intervalId);
    }
}

