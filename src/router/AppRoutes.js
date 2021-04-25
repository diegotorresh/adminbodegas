import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Redirect, Switch, Link, Route} from 'react-router-dom'
import AdminBodegasRoutes from './AdminBodegasRouter'

const AppRoutes = () => {
    return(
        <Router>
            <Switch>
                <AdminBodegasRoutes path="/adminbodegas" />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
