import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsFetchAll, postsFetchByAuthor} from '../reduxModules/posts/actions';
import PostsListPlaceholder from '../components/post/PostsListPlaceholder';
import PostsList from '../components/post/PostsList';
export class PostListHoC extends Component {

    static propTypes = {
        fetchByAuthorId: PropTypes.bool,
        auth: PropTypes.object,
        posts: PropTypes.array
    };

    static defaultProps = {
        fetchByAuthorId: false
    }

    componentDidMount() {
        this.props.postsFetchAll();
    }
    

    render() {
        const { posts } = this.props;
        if (posts.length === 0) {
            return <PostsListPlaceholder />;
        }

        return <PostsList posts={posts} />
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    posts: state.posts.postList
});

const mapDispatchToProps = {
    postsFetchAll,
    postsFetchByAuthor
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostListHoC);