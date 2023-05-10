import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsForm, InputLabel, InputField, BtnSubmit } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let { name } = this.state;
    this.props.onSubmit({ name });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };
  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <label>
          <InputLabel>Name</InputLabel>
          <InputField
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </ContactsForm>
    );
  }
}
