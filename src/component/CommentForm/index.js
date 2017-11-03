import React, { Component } from 'react';

import LabeledInput from '../LabeledInput';

import './comment-form.css';

class CommentForm extends Component {
  state = { name: '', comment: '' };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, comment } = this.state;
    this.props.submitHandler(name, comment);
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <LabeledInput
          name="name"
          labelText="Name"
          id="nameInput"
          inputPlaceholder="Sadie"
          onChange={this.handleInputChange}
        />
        <label htmlFor="commentTextArea">Comment</label>
        <textarea
          name="comment"
          className="u-full-width"
          id="commentTextArea"
          placeholder="Meow, furthermore, meow mew."
          onChange={this.handleInputChange}
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

export default CommentForm;
