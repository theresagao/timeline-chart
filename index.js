var React = require("react");

//import React from 'react';
var DevPage = require("./components/DevPage");
//import DevPage from './components/DevPage';

const Root = () => {
    return (
       <DevPage />
    )
}




render(<Root/>, document.querySelector('#main'));