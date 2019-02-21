import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
    const date = new Date(post.createdAt);
    const postDate = `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`;
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>{post.title}</h2>
                </div>
                <div className="card-body">
                    <p>{post.body}</p>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="text-left col col-6">
                            <h5 className="text-muted">{post.author.name}</h5>
                        </div>
                        <div className="text-right col col-6">
                            <h6 className="text-muted">{postDate}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
        authorId: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
        }),
    }),
};

export default Post;
