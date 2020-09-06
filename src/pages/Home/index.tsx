import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import PhoneList from './../../components/PhoneList';
import { PropsPhoneList } from './../../models/PhoneModel';
import './styles.scss';

export default function Home({ phones }: PropsPhoneList): JSX.Element {
  return (
    <>
      <h1>Página de inicio</h1>
      <PhoneList phones={phones} />
    </>
  );
}
