import React, { Component } from 'react';

import './message-form.css';

class MessageForm extends Component {
  render() {
    return (
      <form className="message-form">
        <div class="row">
          <div class="six columns">
            <label for="nameInput">Your name</label>
            <input
              class="u-full-width"
              type="text"
              placeholder="Sadie"
              id="nameInput"
            />
          </div>
          <div class="six columns"></div>
        </div>
        <label for="messageTextArea">Message</label>
        <textarea
          class="u-full-width"
          placeholder="Meow, furthermore, meow mew."
          id="messageTextArea">
        </textarea>
        <input class="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default MessageForm;
