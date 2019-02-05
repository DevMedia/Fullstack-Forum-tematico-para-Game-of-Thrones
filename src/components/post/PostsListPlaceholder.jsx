import React from 'react';
import '../styles.scss';

const PostsListPlaceholder = props => (
    <div className="list-group">{renderPlaceholders()}</div>
);

function renderPlaceholders(times = 5) {
    const items = [];
    for (let index = 0; index < times; index++) {
        items[index] = (
            <div
                className="list-group-item list-group-item-action flex-column align-items-start disabled"
                key={index}
            >
                <div className="row d-flex w-100 justify-content-between">
                    <div className="col col-12 text-left">
                        <div className="ph-col-12">
                            <div className="ph-row">
                                <div className="ph-col-6 big"></div>
                                <div className="ph-col-8 big"></div>
                                <div className="ph-col-4 empty"></div>
                                <div className="ph-col-4 big"></div>
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
