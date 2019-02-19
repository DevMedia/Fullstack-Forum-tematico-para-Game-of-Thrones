import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUpForm = ({ handleChange, submitSignUp, name, password, buttonDisabled }) => (
    <div className="row justify-content-center">
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
                            onChange={handleChange('name')}
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
                            onChange={handleChange('email')}
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
                            onChange={handleChange('password')}
                            placeholder="Mínimo de 4 caracteres."
                        />
                    </div>
                    <button 
                        className="btn btn-success" 
                        onClick={submitSignUp}
                        // disabled={buttonDisabled}
                    >
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
};

export default SignUpForm;
