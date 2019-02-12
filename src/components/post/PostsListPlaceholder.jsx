import React from 'react';

const PostsListPlaceholder = props => (
    <div className="list-group">{renderPlaceholders()}</div>
);

function renderPlaceholders(times = 5) {
    const items = [];
    for (let index = 0; index < times; index++) {
        items[index] = (
            <div
                className="list-group-item col-lg-8 align-items-start disabled"
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
