import React from 'react';
import PropTypes from 'prop-types';

function CommentForm({ handleChange, handleSubmit, body }) {
    return (
        <div className="row mt-3">
            <form className="align-self-center col align-self center">
                <div className="card">
                    <div className="card-header">
                        <h6>Escrever Comentário</h6>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <textarea
                                rows="3"
                                className="form-control"
                                value={body}
                                onChange={handleChange('body')}
                            />
                        </div>
                        <button
                            className="btn btn-success"
                            onClick={handleSubmit}>
                            Comentar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

CommentForm.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    body: PropTypes.string,
};

export default CommentForm;
