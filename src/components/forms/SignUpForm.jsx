import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

const SignUpForm = props => (
    <div className="row justify-content-center">
        {props.userIsLogged && <Redirect to="/" />}
        <div className="card col-12 col-lg-6 align-self-center">
            <form className="pb-3 pt-3">
                <fieldset>
                    <legend>Cadastro</legend>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={props.name}
                            onChange={props.handleChange('name')}
                            placeholder="Linus Torvalds..."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            required
                            value={props.email}
                            onChange={props.handleChange('email')}
                            placeholder="linust@torvalds.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={props.password}
                            onChange={props.handleChange('password')}
                            placeholder="Mínimo de 4 caracteres."
                        />
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={props.submitSignUp}>
                        Cadastrar
                    </button>
                </fieldset>
            </form>
            <div className="mb-3 mt-3">
                <Link to={'Login'}>Já possuo cadastro</Link>
            </div>
        </div>
    </div>
);

SignUpForm.propTypes = {
    handleChange: PropTypes.func,
    submitSignUp: PropTypes.func,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    userIsLogged: PropTypes.bool,
};

export default SignUpForm;
