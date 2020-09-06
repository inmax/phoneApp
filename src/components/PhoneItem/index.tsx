import React from 'react';
import { PhoneModel } from './../../models/PhoneModel';
import './styles.scss';

interface PropsPhoneItem {
  phone: PhoneModel;
  onShow?: () => void;
}
const defaultPropsPhoneModel = {
  name: 'Name',
  screen: 'Pantalla',
  price: '0',
  imageFileName: 'asset',
  processor: 'Processor',
};

export default function PhoneItem({ phone, onShow }: PropsPhoneItem): JSX.Element {
  const {
    name = defaultPropsPhoneModel.name,
    screen = defaultPropsPhoneModel.name,
    price = defaultPropsPhoneModel.price,
    imageFileName = defaultPropsPhoneModel.imageFileName,
    processor = defaultPropsPhoneModel.imageFileName,
  } = phone;

  return (
    <article className="item-product" onClick={onShow}>
      <header>
        <h4 className="item-product__title">{name}</h4>
        <p className="item-product__excerpt">
          Preprocessor: {processor}
          <br></br>
          screen: {screen}{' '}
        </p>
      </header>
      <figure className="item-product__figure">
        <img
          className="item-product__image"
          src={`https://raw.githubusercontent.com/inmax/interview-code-challenges/master/react/phone-catalogue/images/${imageFileName}`}
          alt={`Imagen del modelo ${name}`}
        />
      </figure>
      <footer className="item-product__footer">
        <p>
          {price}
          <sup>€</sup>{' '}
        </p>
      </footer>
    </article>
  );
}
