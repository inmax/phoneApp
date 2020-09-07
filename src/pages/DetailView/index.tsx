import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
import { PhoneModel } from './../../models/PhoneModel';

const defaultPropsPhoneModel = {
  name: 'Name',
  screen: 'Pantalla',
  price: '0',
  imageFileName: 'asset',
  processor: 'Processor',
};

export default function DetailView({ item }: any): JSX.Element {
  const {
    name = defaultPropsPhoneModel.name,
    screen = defaultPropsPhoneModel.name,
    price = defaultPropsPhoneModel.price,
    imageFileName = defaultPropsPhoneModel.imageFileName,
    processor = defaultPropsPhoneModel.imageFileName,
  } = item;

  return <h1>ViewDetailFilm {name}</h1>;
}
