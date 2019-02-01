import React from 'react';
import PropTypes from 'prop-types';

import '../styles.scss';

const PostPlaceholder = props => {
    return (
        <div className="ph-col-12">
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

PostPlaceholder.propTypes = {};

export default PostPlaceholder;
