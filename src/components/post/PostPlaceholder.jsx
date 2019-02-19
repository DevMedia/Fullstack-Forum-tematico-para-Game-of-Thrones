import React from 'react';

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

export default PostPlaceholder;
