import React from "react";
import ReactDOM from "react-dom";
import './style/main.scss';
import Header from './components/Header/Header';

if (module.hot) {
  module.hot.accept();
}

const Index = () => {
  return <div>Hello React <Header /></div>;
};

ReactDOM.render(<Index />, document.getElementById('root'));