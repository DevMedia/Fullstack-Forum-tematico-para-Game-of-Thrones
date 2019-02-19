import React from 'react';

const PostsListPlaceholder = props => (
    <div className="col-lg-8">
        <div className="list-group-item post-list-header">
            <h4>Posts em Destaque</h4>
        </div>
        <div className="list-group">{renderPlaceholders()}</div>
    </div>
);

function renderPlaceholders(times = 5) {
    const items = [];
    for (let index = 0; index < times; index++) {
        items[index] = (
            <div
                className="list-group-item col align-items-start disabled"
                key={index}>
                <div className="row d-flex w-100 justify-content-between">
                    <div className="col-lg-8 text-left">
                        <div className="ph-col-12">
                            <div className="ph-row">
                                <div className="ph-col-6 " />
                                <div className="ph-col-8 " />
                                <div className="ph-col-12 empty" />
                                <div className="ph-col-4 empty" />
                                <div className="ph-col-12 empty" />
                                <div className="ph-col-4 " />
                                <div className="ph-col-12 empty" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return items;
}

export default PostsListPlaceholder;
