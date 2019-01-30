import React from 'react';
import PropTypes from 'prop-types';

const PostListItem = ({ post }) => (
<div className="row d-flex w-100 justify-content-between">
    <div className="col col-12 text-left">
        <h5 className="text-muted">{ post.author.name }</h5>
        <h4>{ post.title }</h4>
        <h6 className="text-muted">{ post.createdAt }</h6>
    </div>
</div>
);

PostListItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        createAt: PropTypes.string,
        author: PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string
        })
    })
};

export default PostListItem;
