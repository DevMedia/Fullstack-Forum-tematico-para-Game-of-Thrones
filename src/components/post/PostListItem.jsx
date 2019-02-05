import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles.scss';

const PostListItem = ({ post }) => {
    const date = new Date(post.createdAt);
    const postDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return (
        // <Link to={'/post/' + post.id} className="list-group-item-action">
        //     <div className="row d-flex w-100 justify-content-between media">
        //         <div className="col col-12 text-left media-body">
        //             <h5 className="text-muted">{post.author.name}</h5>
        //             <h4 className="post-title"> {post.title} </h4>
        //             <h6 className="text-muted">{postDate}</h6>
        //         </div>
        //     </div>
        // </Link>
        // <div className="panel">
            <Link to={'/post/' + post.id} className="card list-group-item-action mb-3">
            <div className="card-body">
                <h4 className="post-title">{post.title}</h4>
                <p className="mt-0">{post.author.name}</p>
                <p className="text-muted text-right">{postDate}</p>
            </div>
        </Link>
        //</div>
        
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
