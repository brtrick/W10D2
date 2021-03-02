import React from "react";


export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    render() {
        return (
            <h1>The Time Is Now</h1>
        );
    }
}

