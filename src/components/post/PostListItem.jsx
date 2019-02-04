import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles.scss';

const PostListItem = ({ post }) => {
    return (
        <Link to={'/post/' + post.id} className="list-group-item-action">
            <div className="row d-flex w-100 justify-content-between">
                <div className="col col-12 text-left">
                    <h5 className="text-muted">{post.author.name}</h5>
                    <h4 className="post-title"> {post.title} </h4>
                    <h6 className="text-muted">{post.createdAt}</h6>
                </div>
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
