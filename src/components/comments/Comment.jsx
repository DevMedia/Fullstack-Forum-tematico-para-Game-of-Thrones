import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
    const date = new Date(comment.createdAt);
    const commentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
        <div className="list-group-item text-left">
            <h5 className="text-muted">{comment.author.name}</h5>
            <p>{comment.body}</p>
            <h6 className="text-right text-muted">{commentDate}</h6>
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
