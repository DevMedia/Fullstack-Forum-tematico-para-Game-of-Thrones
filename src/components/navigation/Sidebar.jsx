import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    const width = props.isOpen ? '250px' : '0px';
    return (
        <div id="mySidenav" className="sidenav" style={{ width }}>
            <Link to="" className="closebtn" onClick={props.closeMenu}>
                &times;
            </Link>
            {props.userIsLogged || (
                <div>
                    <Link
                        to="/signup"
                        className="nav-link"
                        onClick={props.closeMenu}>
                        Cadastre-se
                    </Link>
                    <Link
                        to="/login"
                        className="nav-link"
                        onClick={props.closeMenu}>
                        Login
                    </Link>
                </div>
            )}
            {props.userIsLogged && (
                <div>
                    <Link
                        to="/create/post"
                        className="nav-link"
                        onClick={props.closeMenu}>
                        Novo Post
                    </Link>
                    <Link
                        to=""
                        className="nav-link"
                        onClick={() => {
                            props.closeMenu();
                            props.authLogoff();
                        }}>
                        Logoff
                    </Link>
                </div>
            )}
        </div>
    );
}
