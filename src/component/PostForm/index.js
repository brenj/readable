import React, { Component } from 'react';

import Heading from '../Heading';
import LabeledInput from '../LabeledInput';

import './post-form.css';

class PostForm extends Component {
  state = {
    name: '',
    title: '',
    language: '',
    snippet: '',
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleCancel = () => {
    this.props.history.push('/');
  }

  handleSubmit = (event) => {
    this.submitForm();
    event.preventDefault();
  }

  submitForm = () => {
    console.log(this.state.name);
  }

  render() {
    return (
      <form className="post-form">
        <Heading
          mainText="Create a new post"
          subText="~ Anonymously ~"
        />
        <LabeledInput
          labelText="Name"
          id="nameInput"
          inputPlaceholder="Sadie"
        />
        <LabeledInput
          labelText="Title"
          id="titleInput"
          inputPlaceholder="Hello World"
        />
        <LabeledInput
          labelText="Language"
          id="languageInput"
          inputPlaceholder="JavaScript"
        />
        <label htmlFor="snippetTextArea">Code Snippet</label>
        <textarea
          className="u-full-width post-form__snippet"
          placeholder="console.log(&quot;Hello, World!&quot;);"
          id="snippetTextArea"
        />
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
