import React from "react";

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
        this.tabClick = this.tabClick.bind(this);
    }

    tabClick(e) {

    }

    render() {
        return (
            <div id="tabs-div">
                <ul id="tabs-header">
                    {this.props.panes.map((tab, i) => <li key={i} onClick={tabClick}><h1>{tab.title}</h1></li>)}
                </ul>
                <article>
                    {this.props.panes.map((tab, i) => <p key={i}>{tab.content}</p>)}
                </article>
            </div>
        );
    }
}