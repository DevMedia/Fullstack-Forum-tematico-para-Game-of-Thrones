import React from 'react';
import PropTypes from 'prop-types';
import Holder from 'holderjs';

const PostsListPlaceholder = props => (
<div className="list-group">    
    {renderPlaceholders()}
</div>
);

function renderPlaceholders(times = 5) {
    const items = [];
    for (let index = 0; index < times; index++) {
        items[index] = (
            <div className="list-group-item list-group-item-action flex-column align-items-start disabled">
                <div className="row d-flex w-100 justify-content-between">
                    <div className="col col-12 text-left">
                        <img src="holder.js/70px20?size=200" />
                        <br/>
                        <img src="holder.js/100px30?size=200" />
                        <br/>
                        <img src="holder.js/60px15?size=200" />
                    </div>
                </div>   
            </div>
        );     
    }
    return items;
}


PostsListPlaceholder.propTypes = {};

export default PostsListPlaceholder;
