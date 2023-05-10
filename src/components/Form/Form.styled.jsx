import styled from '@emotion/styled';

export const ContactsForm = styled.form`
  display: inline-block;
  margin-left: 20px;
  padding: 20px;

  border: 2px solid #737c46;
  border-radius: 6px;
`;

export const InputLabel = styled.span`
  margin-right: 10px;
`;

export const InputField = styled.input`
  height: 20px;
  padding-left: 4px;
  padding-right: 4px;
  border: none;
  border-radius: 3px;
  outline: 1px solid black;

  &:focus {
    outline-color: #ffae3d;
    outline-width: 2px;
  }
`;

export const BtnSubmit = styled.button`
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;
