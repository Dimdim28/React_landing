import React from "react";
import  ReactDOM  from "react-dom";
import 'animate.css';
import WOW from 'wow.js';
import App from './App';
import './index.css';

new WOW().init();

ReactDOM.render(<App />, document.getElementById('root'));