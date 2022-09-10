// import React, { Component } from 'react';
import { memo } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

import Lang from '../Lang';
import useLang from 'hooks/useLang';
import contentText from '../Lang/contentText.json';
import { useEffect } from 'react';

import styled from 'styled-components';
import { Loader } from '../components/Loader/Loader';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operationsContacts';
import { filterContact } from 'redux/filter/sliceFilter';
import {
  getFilter,
  visibleContacts,
  getLoaderStatus,
} from '../redux/selectors';

function App() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(visibleContacts);
  const isLoaderActive = useSelector(getLoaderStatus);

  const dispatch = useDispatch();
  const { lang } = useLang();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = (name, phone) => {
    const payload = { name, phone };
    const action = addContact(payload);
    dispatch(action);
  };

  const onDeleteContact = payload => {
    dispatch(deleteContact(payload));
  };

  const onChangeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  const title = contentText.title[lang];
  const contactsList = contentText.contacts[lang];
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Lang />
      <Form onSubmit={onAddContact} contacts={contacts} />
      <Title>{contactsList}</Title>
      <Filter value={filter} onChange={onChangeFilter} />
      {isLoaderActive && <Loader />}
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  border: 1px solid black;
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #3df4d5;
  border-radius: 20px;
  -moz-box-shadow: 10px 10px 25px #333333;
  -webkit-box-shadow: 10px 10px 25px #333333;
  box-shadow: 10px 10px 25px #333333;
`;

const Title = styled.h2`
  font-size: 40px;
  color: #210672;
  text-shadow: 4px 2px 4px #e9f999;
`;

export default memo(App);
