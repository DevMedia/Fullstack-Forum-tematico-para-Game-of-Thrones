import React, { Component } from 'react';
import './App.css';
import NavigationRouter from './components/navigation/NavigationRouter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationRouter />
            </div>
        );
    }
}

export default App;
