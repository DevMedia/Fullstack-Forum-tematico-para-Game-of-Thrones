import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUpForm = ({ handleChange, submitSignUp, name, password}) => (
<div className="row">
    <div className="card col col-12 col-lg-4 align-self-center">
    <br/>
    <form className="align-self-center">
        <h3>Cadastro</h3>
        <div className="form-group">
            <label htmlFor="name">Informe seu nome</label>
            <input
                type="text"
                className="form-control"
                id="name"
                required
                onChange={handleChange('name')}
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Informe seu e-mail</label>
            <input
                type="text"
                className="form-control"
                id="email"
                required
                onChange={handleChange('email')}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Digite sua senha</label>
            <input
                type="password"
                className="form-control"
                id="password"
                required
                onChange={handleChange('password')}
            />
        </div>
        <button className="btn btn-success" onClick={submitSignUp}>
            Login
        </button>
    </form>
    <br/>
    <Link to={'Login'}> Vai se logar </Link>
    <br/>
    </div>
</div>
);

SignUpForm.propTypes = {
    handleChange: PropTypes.func,
    submitSignUp: PropTypes.func,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
};

export default SignUpForm;
