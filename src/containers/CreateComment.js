import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
        commentsCreateComment: PropTypes.func,
        postId: PropTypes.string
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

        if (this.state.body.length > 0) {
            this.props.commentsCreateComment(
                this.props.postId,
                this.props.auth.userData.id,
                this.state.body
            );
    
            window.scrollTo(0, 0);
        }
    }

    render() {
        const { body } = this.state;
        const { userIsLogged } = this.props.auth;

        return (
            <div>
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
