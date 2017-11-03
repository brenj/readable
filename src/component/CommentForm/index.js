import React, { Component } from 'react';

import LabeledInput from '../LabeledInput';

import './comment-form.css';

class CommentForm extends Component {
  render() {
    return (
      <form className="comment-form">
        <LabeledInput
          labelText="Name"
          id="nameInput"
          inputPlaceholder="Sadie"
        />
        <label htmlFor="commentTextArea">Comment</label>
        <textarea
          className="u-full-width"
          id="commentTextArea"
          placeholder="Meow, furthermore, meow mew."
        />
        <input className="button" type="submit" value="Cancel" />
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
