import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { commentsFetchByPost } from '../reduxModules/comments/actions';
import CommentList from '../components/comments/CommentsList';
import CommentsPlaceHolder from '../components/comments/CommentsPlaceHolder';

export class CommentsList extends Component {
    static propTypes = {
        postId: PropTypes.string,
    };

    componentDidMount() {
        this.props.commentsFetchByPost(this.props.postId);
    }

    render() {
        const { commentsList } = this.props;

        return commentsList.length === 0 
            ? <CommentsPlaceHolder />
            : <CommentList comments={commentsList} />;

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
