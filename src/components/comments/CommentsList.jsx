import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentsList = ({ comments }) => {
    return (
        <div className="list-group">
            {comments.map(comment => (
                <div
                    className="list-group-item list-group-item-action flex-column align-items-start"
                    key={comment.id}>
                    <Comment comment={comment} />
                </div>
            ))}
        </div>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsList;
