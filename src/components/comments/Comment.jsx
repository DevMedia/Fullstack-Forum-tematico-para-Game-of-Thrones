import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
    const date = new Date(comment.createdAt);
    const commentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
        <div className="text-left list-group-item list-group-item-action flex-column align-items-start mt-3">
            <h5 className="text-muted">{comment.author.name}</h5>
            <p>{comment.body}</p>
            <p className="text-right text-muted">{commentDate}</p>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string,
        body: PropTypes.string,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
        authorId: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string,
        }),
    }),
};

export default Comment;
