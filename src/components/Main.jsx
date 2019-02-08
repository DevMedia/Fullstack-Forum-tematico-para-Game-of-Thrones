import React, { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../containers/Navbar';
import NavigationRouter from './navigation/NavigationRouter';
import Footer from './Footer';
import './styles.scss';

const Main = () => (
<div>
<BrowserRouter>
    <div className="">
        <header className="">
            <Route component={Navbar} />
        </header>
        <div className="body pb-5 pt-5">
            <NavigationRouter />
        </div>
        <Footer />
    </div>
</BrowserRouter>
</div>
);

export default Main;