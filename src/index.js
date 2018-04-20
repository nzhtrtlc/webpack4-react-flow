import React from "react";
import ReactDOM from "react-dom";
import TestComponent from './TestComponent';

if (module.hot) {
   module.hot.accept();
}

const Index = () => {
   return <div>Hello React asd asdasd asdaaa! <TestComponent/></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));