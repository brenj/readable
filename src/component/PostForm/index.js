import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../api';
import { creators } from '../../action';
import Heading from '../Heading';
import LabeledInput from '../LabeledInput';
import LabeledSelect from '../LabeledSelect';
import { getLanguageOptions } from '../../util/languages';

import './post-form.css';

const DEFAULT_LANGUAGE = 'javascript';

const propTypes = {
  formType: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

class PostForm extends Component {
  state = {
    name: '',
    title: '',
    language: '',
    snippet: '',
  }

  componentDidMount() {
    const { formType, match, post } = this.props;
    const language = match.params.language || DEFAULT_LANGUAGE;

    if (formType === 'edit') {
      if (post === null) {
        const { id } = match.params;
        api.getPost(id)
          .then((fetchedPost) => { this.fillForm(fetchedPost); });
      } else {
        this.fillForm(post);
      }
    } else {
      this.fillLanguage(language);
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleCancel = () => {
    this.props.history.goBack();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.submitForm();
  }

  submitForm = () => {
    const { formType } = this.props;
    this[`${formType}Post`]().then((post) => {
      this.props[`${formType}PostDispatcher`](post);
      this.props.history.goBack();
    });
  }

  addPost = () => {
    const { title, snippet, name, language } = this.state;
    return api.addPost(title, snippet, name, language);
  }

  editPost = () => {
    const { id } = this.props.match.params;
    const { title, snippet } = this.state;
    return api.editPost(id, title, snippet);
  }

  fillForm = (post) => {
    this.setState({
      language: post.category,
      name: post.author,
      title: post.title,
      snippet: post.body,
    });
  }

  fillLanguage = (language) => {
    this.setState({ language });
  }

  render() {
    const { formType, heading } = this.props;
    const isDisabled = (
      !this.state.name || !this.state.title || !this.state.snippet);
    const submitButtonClass = isDisabled ?
      'post-form__button--disabled' :
      'post-form__button--submit';

    return (
      <div>
        <Heading
          mainText={heading}
          subText="- Anonymously -"
          subTextStyle="heading__subtext--barcode"
        />
        <form className="post-form" onSubmit={this.handleSubmit}>
          <LabeledInput
            id="nameInput"
            inputPlaceholder="Sebastian"
            isDisabled={formType === 'edit'}
            isRequired
            labelText="Name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <LabeledInput
            id="titleInput"
            inputPlaceholder="Hello World"
            isDisabled={false}
            isRequired
            labelText="Title"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
          <LabeledSelect
            name="language"
            labelText="Language"
            id="languageInput"
            isDisabled={formType === 'edit'}
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
            className={`button button-primary ${submitButtonClass}`}
            disabled={isDisabled}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

PostForm.defaultProps = { post: null };
PostForm.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.id],
});

export default connect(
  mapStateToProps,
  {
    addPostDispatcher: creators.addPost,
    editPostDispatcher: creators.editPost,
  },
)(PostForm);
