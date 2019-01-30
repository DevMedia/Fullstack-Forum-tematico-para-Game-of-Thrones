import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavigationRouter from './components/navigation/NavigationRouter';
import Navbar from './components/navigation/Navbar';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header>
                        <Navbar />
                    </header>
                    <div>
                        <NavigationRouter />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
