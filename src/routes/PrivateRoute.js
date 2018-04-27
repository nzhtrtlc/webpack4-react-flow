import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { fakeAuth } from 'Helper/fakeAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated == true
            ? <Component {...props} />
            :
            <Redirect to="/login"/>
    )}/>
);

PrivateRoute.propTypes = {
    component: PropTypes.node
}

export default PrivateRoute;