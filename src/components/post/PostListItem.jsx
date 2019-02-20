import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostListItem = ({ post }) => {
    const date = new Date(post.createdAt);
    const postDate = `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()}`;

    return (
        <Link
            to={'/post/' + post.id}
            className="list-group-item list-group-item-action">
            <div className="row justify-content-between pr-3 pl-1">
                <div className="col-lg-10 col-9">
                    <h4 className="post-title">{post.title}</h4>
                    <p>
                        {post.body.substr(0, 300)}{' '}
                        {post.body.length > 300 && '...'}
                    </p>
                </div>
                <div className="col-lg-2 col-3 justify-content-right">
                    <img
                        src={`https://api.adorable.io/avatars/40/${post.author.createdAt}`}
                        alt="Avatar"
                        className="avatar"
                    />
                    <p>{post.author.name}</p>
                    <p>{postDate}</p>
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
