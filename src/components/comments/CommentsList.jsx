import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentsList = ({ comments }) => {
    return (
        <div className="mt-3">
            <div className="list-group">
                {comments.map(comment => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        </div>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsList;
