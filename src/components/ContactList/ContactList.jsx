import React, { Component } from 'react';
import { ContactsItem, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contacts, onClickDelete }) => {
  return (
    <>
      <ul>
        {contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                {name}: {number}
                <BtnDelete onClick={() => onClickDelete(id)}>Delete</BtnDelete>
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
