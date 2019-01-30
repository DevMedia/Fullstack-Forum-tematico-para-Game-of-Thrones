import React from 'react';
import PropTypes from 'prop-types';

import PostListItem from './PostListItem';

const PostsList = ({ posts }) => (
<div className="list-group">
    { posts.map(post => (
        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <PostListItem post={post} />
        </div>
    )) }
</div>
);

PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};


export default PostsList;
