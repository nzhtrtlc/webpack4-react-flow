import React from 'react'
import { fakeAuth } from 'Helper/fakeAuth'
import Button from 'Components/Button'
import { Redirect } from 'react-router-dom'


class Login extends React.Component {

    state = {
        redirectToReferer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferer: true
            })
        })
    }


    render() {
        const { redirectToReferer } = this.state;
        if (redirectToReferer === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <p>You must log in to view this page</p>
                {redirectToReferer}
                <div>
                    <Button primary onClick={this.login}>
                        Login
                    </Button>
                </div>
            </div>
        )
    }
}

export default Login