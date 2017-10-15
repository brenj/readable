import React, { Component } from 'react';
import { connect } from 'react-redux';

import { api } from '../../api';
import { creators } from '../../action';
import Heading from '../Heading';
import LabeledInput from '../LabeledInput';
import LabeledSelect from '../LabeledSelect';
import { getLanguageOptions } from '../../languages';

import './post-form.css';

class PostForm extends Component {
  state = {
    name: '',
    title: '',
    language: 'javascript',
    snippet: '',
  }

  componentDidMount() {
    const { formType, post } = this.props;

    if (formType === 'edit') {
      if (post === undefined) {
        const { id } = this.props.match.params;
        api.getPost(id)
          .then((fetchedPost) => { this.fillForm(fetchedPost); });
      } else {
        this.fillForm(post);
      }
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleCancel = () => {
    this.props.history.push('/');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.submitForm();
  }

  submitForm = () => {
    const { title, snippet, name, language } = this.state;
    addPostAPI(title, snippet, name, language)
      .then((post) => {
        this.props.addPostDispatcher(post);
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <Heading
          mainText="Create a new post"
          subText="~ Anonymously ~"
        />
        <LabeledInput
          name="name"
          labelText="Name"
          id="nameInput"
          inputPlaceholder="Sadie"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <LabeledInput
          name="title"
          labelText="Title"
          id="titleInput"
          inputPlaceholder="Hello World"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <LabeledSelect
          name="language"
          labelText="Language"
          id="languageInput"
          value={this.state.language}
          onChange={this.handleInputChange}
          options={getLanguageOptions()}
        />
        <label htmlFor="snippetTextArea">Code Snippet</label>
        <textarea
          name="snippet"
          className="u-full-width post-form__snippet"
          placeholder="console.log(&quot;Hello, World!&quot;);"
          id="snippetTextArea"
          value={this.state.snippet}
          onChange={this.handleInputChange}
        />
        <input
          className="button"
          type="button"
          value="Cancel"
          onClick={this.handleCancel}
        />
        <input
          className="button button-primary post-form__button--submit"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

export default connect(null, { addPostDispatcher: addPost })(PostForm);
