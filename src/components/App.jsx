import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

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
    let { contacts, filter } = this.state;

    const contactsNumber = contacts.length;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleContactAdding} />
        <h2>Contacts</h2>

        {contacts.length > 0 && (
          <Filter value={filter} onChange={this.handleFilterChange} />
        )}
        <ContactList contacts={filteredContacts} />
      </>
    );
  }
}
