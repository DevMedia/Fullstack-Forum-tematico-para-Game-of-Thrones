import React from 'react';
import PropTypes from 'prop-types';

function CommentForm({ handleChange, handleSubmit, body}) {
    return (
        <div className="row">
            <form className="align-self-center col col-12 col-lg-4 align-self center">
                <div className="card">
                    <div className="card-header">
                        <h5>Escrever Comentário</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <textarea
                                rows="4"
                                className="form-control"
                                value={body}
                                onChange={handleChange('body')}
                            />
                        </div>
                        <button className="btn btn-success" onClick={handleSubmit}>Criar</button>
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
