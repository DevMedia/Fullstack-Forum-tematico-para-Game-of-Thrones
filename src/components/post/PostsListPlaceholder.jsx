import React from 'react';

const PostsListPlaceholder = props => (
<div className="list-group">    
    {renderPlaceholders()}
</div>
);

function renderPlaceholders(times = 5) {
    const items = [];
    for (let index = 0; index < times; index++) {
        items[index] = (
            <div className="list-group-item list-group-item-action flex-column align-items-start disabled" key={index}>
                <div className="row d-flex w-100 justify-content-between">
                    <div className="col col-12 text-left">
                        <img src="holder.js/70px20?size=200" alt="carregando"/>
                        <br/>
                        <img src="holder.js/100px30?size=200" alt="carregando"/>
                        <br/>
                        <img src="holder.js/60px15?size=200" alt="carregando"/>
                    </div>
                </div>   
            </div>
        );     
    }
    return items;
}


PostsListPlaceholder.propTypes = {};

export default PostsListPlaceholder;
