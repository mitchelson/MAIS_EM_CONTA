import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={About} path="/about" />
        </BrowserRouter>
    )
}
export default Routes;