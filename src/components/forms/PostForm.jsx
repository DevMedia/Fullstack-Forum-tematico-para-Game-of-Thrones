import React from 'react';
import PropTypes from 'prop-types';

const PostForm = ({ title, body, handleChange, handleSubmit }) => {
    return (
        <div className="row">
            <form className="align-self-center col col-12 col-lg-4 align-self center">
                <div className="card ">
                    <div className="card-header">
                        <h3>Novo Post</h3>
                    </div>
                    <div className="card-body">
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
                        <button className="btn btn-success" onClick={handleSubmit}>Criar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

PostForm.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    handleChange: PropTypes.func,
    hadleSubmit: PropTypes.func,
};

export default PostForm;
