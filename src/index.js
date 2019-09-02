import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import App from './App';

ReactDOM.render(
    // BrowerRouter is a component; it gives all functionality to of routing to <App /> component
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));
