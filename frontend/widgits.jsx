import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from "./tabs";

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const tab = [{title:"one", content:"article 1"},{ title: "two", content: "article 2" }];

    ReactDOM.render(<><Clock/><Tabs panes={tab}/></>, root);
});