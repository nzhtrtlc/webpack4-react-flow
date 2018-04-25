import React from "react";
import ReactDOM from "react-dom";
import TestComponent from './TestComponent';
import './scss/main.scss';

if (module.hot) {
   module.hot.accept();
}

const Index = () => {
   return <div>Hello React asd asdasd XXX! <TestComponent /></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));