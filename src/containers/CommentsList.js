import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { commentsFetchByPost } from '../reduxModules/comments/actions';
import CommentsListPresentation from '../components/comments/CommentsList';

export class CommentsList extends Component {
    static propTypes = {
        postId: PropTypes.string,
        commentsFetchByPost: PropTypes.func,
        commentsList: PropTypes.arrayOf(PropTypes.object)
    };

    componentDidMount() {
        this.props.commentsFetchByPost(this.props.postId);
    }

    render() {
        const { commentsList } = this.props;

        return <CommentsListPresentation comments={commentsList} />;

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
