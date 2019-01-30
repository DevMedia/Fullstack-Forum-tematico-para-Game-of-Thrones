import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Home = () => (
<div>
    <h1>hello</h1>
    <Redirect to="/login" />
</div>
);

export default Home;