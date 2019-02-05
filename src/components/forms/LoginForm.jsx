import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({email, password, handleChange, submitLogin})  => (
<div className="row">
    <div className="card col-lg-8 align-self-center">
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
        <button className="btn btn-success" onClick={submitLogin}>Login</button>
        </fieldset>
    </form>
        
        <div className="mt-3 mb-3">
            <Link to={'SignUp'}>Cadastre-se</Link>
        </div>
        
    </div>
</div>
);


LoginForm.propTypes = {
    handleChange: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string
}

export default LoginForm;