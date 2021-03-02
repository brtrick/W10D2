import React from "react";

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            prevIndex: 1,
        }
        this.tabClick = this.tabClick.bind(this);
    }

    tabClick(e) {
        this.setState({prevIndex: this.state.index});
        this.setState({index: e.currentTarget.getAttribute('data-key')});
    }

    render() {
        
        return (
            <div id="tabs-div">
                <ul id="tabs-header">
                    {this.props.panes.map((tab, i) => <li key={i} data-key={i} onClick={this.tabClick}><h1>{tab.title}</h1></li>)}
                </ul>
                <article id="tabs-article">
                    {<p className="hidden" key={this.state.prevIndex}>{this.props.panes[this.state.prevIndex].content}</p>}

                    {<p className="appear" key={this.state.index}>{this.props.panes[this.state.index].content}</p>}
                </article>
            </div>
        );
    }
}