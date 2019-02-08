import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PostListItem from './PostListItem';

const PostsList = ({ posts, showMore }) => (
    <div>
        <div className="list-group">
            {posts.map(post => (
                <PostListItem post={post} key={post.id} />
            ))}
        </div>
        <div className="card mb-3">
            <button className="btn btn-success" onClick={showMore}>
                Veja Mais
            </button>
        </div>
        <div className="card">
            <Link to="/create/post" className="btn btn-primary">
                <span className="oi oi-plus" /> Novo Post
            </Link>
        </div>
    </div>
);

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    showMore: PropTypes.func.isRequired
};

export default PostsList;
