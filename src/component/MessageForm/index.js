import React, { Component } from 'react';

import LabeledInput from '../LabeledInput';

import './message-form.css';

class MessageForm extends Component {
  render() {
    return (
      <form className="message-form">
        <LabeledInput
          labelText="Name"
          id="nameInput"
          inputPlaceholder="Sadie"
        />
        <label htmlFor="messageTextArea">Message</label>
        <textarea
          className="u-full-width"
          id="messageTextArea"
          placeholder="Meow, furthermore, meow mew."
        />
        <input className="button" type="submit" value="Cancel" />
        <input
          className="button message-form__button--submit"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

export default MessageForm;
