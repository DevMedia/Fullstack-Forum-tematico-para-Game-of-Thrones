import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { commentsFetchByPost } from '../reduxModules/comments/actions';
import CommentList from '../components/comments/CommentsList';

export class CommentsList extends Component {
    static propTypes = {
        postId: PropTypes.string,
    };

    componentDidMount() {
        this.props.commentsFetchByPost(this.props.postId);
    }

    render() {
        const { commentsList } = this.props;

        // return commentsList.length === 0 
        //     ? <h1>placeholder</h1>
        //     : <CommentList comments={commentsList} />;

        return commentsList.length !== 0 && <CommentList comments={commentsList} />;
    }
}

const mapStateToProps = state => ({
    commentsList: state.comments.commentsList
});

const mapDispatchToProps = {
    commentsFetchByPost
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsList);
