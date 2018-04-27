import React from 'react';
import { fakeAuth } from 'Helper/fakeAuth';
import Button from 'Components/Button';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


class Login extends React.Component {

    static propTypes = {
        location: PropTypes.object
    }

    state = {
        redirectToReferer: false,
        LOGIN_PENDING: false
    }

    login = () => {
        this.setState({ LOGIN_PENDING: true })
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferer: true,
                LOGIN_PENDING: false
            })
        })
    }


    render() {
        const { redirectToReferer, LOGIN_PENDING } = this.state;
        const { from } = this.props.location.state || '/'

        if (redirectToReferer === true) {
            return <Redirect to={from}/>
        }
        return (
            <div>
                <p>You must log in to view this page at {from}</p>
                {LOGIN_PENDING && 'Logging in...'}
                <div>
                    <Button
                        className="test"
                        disabled={LOGIN_PENDING}
                        primary
                        onClick={this.login}>
                        Login
                    </Button>
                </div>
            </div>
        )
    }
}

export default Login