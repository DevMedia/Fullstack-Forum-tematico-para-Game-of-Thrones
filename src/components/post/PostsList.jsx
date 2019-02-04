import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PostListItem from './PostListItem';

const PostsList = ({ posts }) => (
    <div>
        <div className="card">
            <Link to="/create/post" className="btn btn-primary">+ Novo Post</Link>
        </div>
        <div className="list-group">
            {posts.map(post => (
                <div
                    className="list-group-item list-group-item-action flex-column align-items-start"
                    key={post.id}>
                    <PostListItem post={post} />
                </div>
            ))}
        </div>
    </div>
);

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
};

export default PostsList;
