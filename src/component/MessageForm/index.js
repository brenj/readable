import React, { Component } from 'react';

import LabeledInput from '../LabeledInput';

import './message-form.css';

class MessageForm extends Component {
  render() {
    return (
      <form className="message-form">
        <LabeledInput
          focus={true}
          labelText="Name"
          inputPlaceholder="Sadie"
        />
        <label>Message</label>
        <textarea
          className="u-full-width"
          placeholder="Meow, furthermore, meow mew."
        >
        </textarea>
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
