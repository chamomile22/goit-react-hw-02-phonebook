import React, {Component} from 'react';
import { nanoid } from 'nanoid'
import {Form} from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  handleContactAdding=({name})=>{
    const contact = {
      name,
      id: nanoid(),
    }
    
    this.setState((prevState)=>({
      contacts: [...prevState.contacts, contact]
    }))
  }

  render() {
    let {contacts} = this.state;
    console.log(contacts);
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleContactAdding}/>

        <h2>Contacts</h2>
        <ul>
          {contacts.length > 0 ? contacts.map(({id, name})=>{
            return <li key={id}>{name}</li>
      }):(<p>No contacts here</p>)}
        </ul>
      </>
    );
  }
}
