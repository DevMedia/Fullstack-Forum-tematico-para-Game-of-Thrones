import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CommentForm from './../components/forms/CommentForm';
import { commentsCreateComment } from '../reduxModules/comments/actions';

export class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentStatus: 'new',
            body: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        auth: PropTypes.object,
        commentsCreateComment: PropTypes.func
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

        this.props.commentsCreateComment(
            this.props.postId,
            this.props.auth.userData.id,
            this.state.body
        );

        this.setState({
            commentStatus: 'created',
        });
    }

    render() {
        const { body } = this.state;
        const { userIsLogged } = this.props.auth;

        return (
            <div>
                {this.state.commentStatus === 'created' && <Redirect to="/" />}
                {userIsLogged &&
                <CommentForm
                    body={body}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    commentsCreateComment,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateComment);
