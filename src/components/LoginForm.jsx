import React from 'react';
import PropTypes from 'prop-types';


function LoginForm({email, password, handleChange, submitLogin}) {
    return (
        <div className="row">
            <div className="card col col-12 col-lg-4 align-self-center">
            <form className="align-self-center">
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="email">Endereço de Email</label>
                    <input
                        className="form-control"
                        id="email"
                        type="text"
                        value={email}
                        onChange={handleChange('email')}
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
                    />
                </div>
                <button className="btn btn-success" onClick={submitLogin}>Login</button>
            </form>
            </div>
        </div>
    );
}

LoginForm.propTypes = {
    handleChange: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string
}

export default LoginForm;