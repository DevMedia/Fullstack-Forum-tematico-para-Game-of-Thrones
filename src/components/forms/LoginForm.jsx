import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

function LoginForm(props) {
    const { email, password, handleChange, submitLogin, userIsLogged } = props;
    return (
        <div className="row justify-content-center">
            {userIsLogged && <Redirect to="/" />}
            <div className="card col-lg-6 align-self-center">
                <form className="pb-3 pt-3">
                    <fieldset>
                        <legend>Login</legend>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                name="id"
                                className="form-control"
                                id="email"
                                type="text"
                                value={email}
                                onChange={handleChange('email')}
                                placeholder="linust@torvalds.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={handleChange('password')}
                                placeholder="••••"
                            />
                        </div>
                        <button
                            className="btn btn-success"
                            onClick={submitLogin}>
                            Login
                        </button>
                    </fieldset>
                </form>
                <div className="mt-3 mb-3">
                    <Link to={'SignUp'}>Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
}

LoginForm.propTypes = {
    userIsLogged: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
    handleChange: PropTypes.func,
    submitLogin: PropTypes.func,
};

export default LoginForm;
