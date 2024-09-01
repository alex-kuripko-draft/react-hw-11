import React from 'react';
import Router from './router';
import Links from './components/links';
import {BrowserRouter} from "react-router-dom";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Links/>
            <div className="container">
                <Router/>
            </div>
        </BrowserRouter>
    );
}

export default App;
