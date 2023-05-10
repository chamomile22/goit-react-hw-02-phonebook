import React, { Component } from 'react';
import { ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.length > 0 ? (
          contacts.map(({ id, name }) => {
            return <ContactsItem key={id}>{name}</ContactsItem>;
          })
        ) : (
          <p>No contacts here</p>
        )}
      </ul>
    </>
  );
};
