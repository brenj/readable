import PropTypes from 'prop-types';
import React, { Component } from 'react';

import LabeledInput from '../LabeledInput';

import './comment-form.css';

const propTypes = {
  cancelHandler: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  submitHandler: PropTypes.func.isRequired,
};

class CommentForm extends Component {
  constructor(props) {
    super(props);

    if (props.comment !== null) {
      const { author, body } = props.comment;
      this.state = { commentAuthor: author, commentText: body };
    } else {
      this.state = { commentAuthor: '', commentText: '' };
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { commentAuthor, commentText } = this.state;
    this.props.submitHandler(commentAuthor, commentText);
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <LabeledInput
          name="commentAuthor"
          labelText="Name"
          id="nameInput"
          inputPlaceholder="Sadie"
          isDisabled={this.props.comment !== null}
          onChange={this.handleInputChange}
          value={this.state.commentAuthor}
        />
        <label htmlFor="commentTextArea">Comment*</label>
        <textarea
          name="commentText"
          className="u-full-width"
          id="commentTextArea"
          placeholder="Meow, furthermore, meow mew."
          onChange={this.handleInputChange}
          value={this.state.commentText}
        />
        <input
          className="button"
          type="submit"
          value="Cancel"
          onClick={(event) => {
            event.preventDefault();
            this.props.cancelHandler();
          }}
        />
        <input
          className="button comment-form__button--submit"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

CommentForm.defaultProps = { comment: null };
CommentForm.propTypes = propTypes;

export default CommentForm;
