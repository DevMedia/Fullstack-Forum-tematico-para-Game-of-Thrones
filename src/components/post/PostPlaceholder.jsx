import React from 'react';
import PropTypes from 'prop-types';

const PostPlaceholder = props => {
    return (
        <div className="ph-col-12">
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

PostPlaceholder.propTypes = {};

export default PostPlaceholder;
