import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const Comment = ({ comment }) => {
    const date = new Date(comment.createdAt);
    const commentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
        <div className="list-group-item">
            <div className="row justify-content-around pr-3 pl-1">
                <div className="col-lg-10 col-9">
                    <p className="lead">{comment.body}</p>
                </div>
                <div className="col-lg-2 col-3 justify-content-right">
                    <Avatar author={comment.author} postDate={commentDate} />
                </div>
            </div>
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
