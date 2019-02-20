import React, { Component } from 'react';
import { connect } from 'react-redux';

import SidebarPresentation from '../components/navigation/Sidebar';
import { navigationCloseSidebar } from '../reduxModules/navigation/actions';
import { authLogoff } from '../reduxModules/auth/actions';

export class Sidebar extends Component {
    constructor(props) {
      super(props)
    
      this.closeMenu = this.closeMenu.bind(this);
      this.logoff = this.logoff.bind(this);
    }

    closeMenu() {
        this.props.navigationCloseSidebar();
    }

    async logoff() {
        await this.props.authLogoff();
        this.props.history.push('/login');
    }

    render() {
        const { sidebarIsOpen } = this.props;

        return (
            <SidebarPresentation
                userIsLogged={this.props.auth.userIsLogged}
                isOpen={sidebarIsOpen}
                openMenu={this.openMenu}
                closeMenu={this.closeMenu}
                authLogoff={this.logoff}
            />
        );
    }
}

const mapStateToProps = state => ({
    sidebarIsOpen: state.navigation.sidebarIsOpen,
    auth: state.auth
});

const mapDispatchToProps = {
    navigationCloseSidebar,
    authLogoff
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
