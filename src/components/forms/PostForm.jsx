import React from 'react';
import PropTypes from 'prop-types';

const PostForm = ({ title, body, handleChange, handleSubmit }) => {
    return (
        <div className="row justify-content-center">
            <div className="card col-lg-6 align-self-center">
                <form className="pb-3 pt-3">
                    <fieldset>
                        <legend>Novo Post</legend>
                        <div className="form-group">
                            <input
                                onChange={handleChange('title')}
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="form-control"
                                valuse={title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Post body</label>
                            <textarea
                                onChange={handleChange('body')}
                                name="body"
                                placeholder="..."
                                className="form-control"
                                valuse={body}
                            />
                        </div>
                        <button
                            className="btn btn-success"
                            onClick={handleSubmit}>
                            Criar
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

PostForm.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default PostForm;
