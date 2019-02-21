import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsFetchDetails } from '../reduxModules/posts/actions';
import Post from '../components/post/Post';
import PostPlaceholder from '../components/post/PostPlaceholder';
import CommentsList from './CommentsList';
import CreateComment from './CreateComment';

export class PostThread extends Component {
    static propTypes = {
        match: PropTypes.object,
        postDetails: PropTypes.object,
        postsFetchDetails: PropTypes.func,
    };

    componentDidMount() {
        const { postId } = this.props.match.params;
        this.props.postsFetchDetails(postId);
        window.scrollTo(0, 0);
    }

    render() {
        const { postDetails } = this.props;

        return (
            <div className="container">
                {postDetails.id ? (
                    <Post post={postDetails} />
                ) : (
                    <PostPlaceholder />
                )}
                <CommentsList postId={this.props.match.params.postId} />
                <CreateComment postId={this.props.match.params.postId} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    postDetails: state.posts.postDetails,
});

const mapDispatchToProps = {
    postsFetchDetails,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostThread);
