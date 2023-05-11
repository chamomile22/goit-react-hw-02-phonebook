import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  handleContactAdding = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  render() {
    let { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleContactAdding} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}
