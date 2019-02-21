import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PostForm from '../components/forms/PostForm';
import { postsCreatePost } from '../reduxModules/posts/actions';

export class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            postStatus: 'new',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        auth: PropTypes.object,
        posts: PropTypes.object,
        postsCreatePost: PropTypes.func,
    };

    handleChange(input) {
        return event => {
            this.setState({
                [input]: event.target.value,
            });
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.title.length > 0 && this.state.body.length > 0) {
            this.props.postsCreatePost(this.state.title, this.state.body);
            this.setState({
                postStatus: 'created',
            });
        }
    }

    componentDidMount() {
        this.setState({
            postStatus: 'new',
        });
    }

    render() {
        const { title, body, postStatus } = this.state;
        const { userIsLogged } = this.props.auth;

        return (
            <div>
                {userIsLogged || <Redirect to="/login" />}
                {postStatus === 'created' && <Redirect to="/" />}
                <PostForm
                    title={title}
                    body={body}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    posts: state.posts,
});

const mapDispatchToProps = {
    postsCreatePost,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost);
