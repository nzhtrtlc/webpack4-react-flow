import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { fakeAuth } from 'Helper/fakeAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated == true
            ? <Component {...props} />
            :
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location.pathname }
            }} />
    )} />
);

PrivateRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object
}

export default PrivateRoute;