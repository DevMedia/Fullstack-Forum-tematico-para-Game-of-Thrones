import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NavigationRouter from '../components/navigation/NavigationRouter';
import Navbar from '../components/navigation/Navbar';
import { authCheckUserIsLogged, authLogoff } from '../reduxModules/auth/actions';

export class AppContainer extends Component {
    componentDidMount() {
        this.props.authCheckUserIsLogged();
    }

    render() {
        const { authLogoff } = this.props;
        const { userIsLogged } = this.props.auth;

        return (
            <BrowserRouter>
                <div className="App">
                    <header>
                        <Navbar 
                            userIsLogged={userIsLogged}
                            authLogoff={authLogoff}
                        />
                    </header>
                    <div>
                        <NavigationRouter />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    authCheckUserIsLogged,
    authLogoff
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
