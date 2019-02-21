import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    postsFetchAll,
    postsFetchByAuthor,
    postsFetchNextPage,
} from '../reduxModules/posts/actions';
import PostsListPlaceholder from '../components/post/PostsListPlaceholder';
import PostsListPresentation from '../components/post/PostsList';
import TwitterFrame from '../components/TwitterFrame';

export class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nextPage: 2,
        };

        this.paginate = this.paginate.bind(this);
    }

    static propTypes = {
        fetchByAuthorId: PropTypes.bool,
        auth: PropTypes.object,
        posts: PropTypes.array,
        postsFetchAll: PropTypes.func,
        postsFetchNextPage: PropTypes.func,
    };

    static defaultProps = {
        fetchByAuthorId: false,
    };

    componentDidMount() {
        this.props.postsFetchAll();
    }

    async paginate() {
        await this.props.postsFetchNextPage(this.state.nextPage);
        this.setState(currentState => ({
            nextPage: currentState.nextPage + 1,
        }));
    }

    render() {
        const { posts } = this.props;

        return (
            <div className="row">
                {posts.length === 0 ? (
                    <PostsListPlaceholder />
                ) : (
                    <PostsListPresentation
                        posts={posts}
                        showMore={this.paginate}
                    />
                )}
                <div className="col-lg-4">
                    <TwitterFrame />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    posts: state.posts.postList,
});

const mapDispatchToProps = {
    postsFetchAll,
    postsFetchByAuthor,
    postsFetchNextPage,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);
