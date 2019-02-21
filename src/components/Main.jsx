import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../containers/Navbar';
import NavigationRouter from './navigation/NavigationRouter';
import Sidebar from '../containers/Sidebar';
import Footer from './Footer';
import './styles.scss';

const Main = props => (
    <BrowserRouter>
        <div>
            <header className="header">
                <Route component={Sidebar} />
                <Route component={Navbar} />
            </header>
            <div className="body pb-5 pt-5">
                <NavigationRouter />
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    </BrowserRouter>
);

export default Main;
