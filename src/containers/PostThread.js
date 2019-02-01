import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsFetchDetails } from '../reduxModules/posts/actions';
import Post from '../components/post/Post';

export class PostThread extends Component {
    static propTypes = {
        match: PropTypes.object,
        postDetails: PropTypes.object
    };

    componentDidMount() {
        const { postId } = this.props.match.params;
        this.props.postsFetchDetails(postId);
    }

    render() {
        const { postDetails } = this.props;

        return  postDetails.id 
            ? <Post post={postDetails}/>
            : <h1>maseim</h1>
                    
        
    }
}

const mapStateToProps = state => ({
    postDetails: state.posts.postDetails
});

const mapDispatchToProps = {
    postsFetchDetails
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostThread);
