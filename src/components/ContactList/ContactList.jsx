import React, { Component } from 'react';
import { ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                {name}: {number}
              </ContactsItem>
            );
          })
        ) : (
          <p>No contacts here</p>
        )}
      </ul>
    </>
  );
};
