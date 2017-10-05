import React, { Component } from 'react';

import Heading from '../Heading';
import LabeledInput from '../LabeledInput';

import './post-form.css';

class PostForm extends Component {
  render() {
    const language = this.props.match.params.lang;

    return (
      <form className="post-form">
        <Heading
          mainText="Create a new post"
          subText="~ Anonymously ~"
        />
        <LabeledInput
          focus={true}
          labelText="Name"
          inputPlaceholder="Sadie"
        />
        <LabeledInput
          labelText="Title"
          inputPlaceholder="Hello World"
        />
        <LabeledInput
          labelText="Language"
          inputPlaceholder="JavaScript"
        />
        <label>Code Snippet</label>
        <textarea
          className="u-full-width post-form__snippet"
          placeholder="console.log(&quot;Hello, World!&quot;);"
        >
        </textarea>
        <input className="button" type="submit" value="Cancel" />
        <input
          className="button button-primary post-form__button--submit"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

export default PostForm;
