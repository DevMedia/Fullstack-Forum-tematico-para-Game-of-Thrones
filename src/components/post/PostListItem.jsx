import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {
    const date = new Date(post.createdAt);
    const postDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
            <Link to={'/post/' + post.id} className="card list-group-item-action mb-5">
            <div className="card-body">
                <h4 className="post-title">{post.title}</h4>
                <p className="mt-0">{post.author.name}</p>
                <p className="text-muted text-right">{postDate}</p>
            </div>
        </Link>
    );
};

PostListItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        createAt: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
        }),
    }),
};

export default PostListItem;
