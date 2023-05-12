import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { prettyDOM } from '@testing-library/react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleContactAdding = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const foundName = this.state.contacts.find(
      ({ name }) => name === contact.name
    );
    console.log(foundName);
    if (foundName) {
      alert(`${name} is already in your contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  handleContactDeleting = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    let { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleContactAdding} />
        <h2>Contacts</h2>

        {contacts.length > 0 && (
          <Filter value={filter} onChange={this.handleFilterChange} />
        )}
        <ContactList
          contacts={filteredContacts}
          onClickDelete={this.handleContactDeleting}
        />
      </>
    );
  }
}
