import React from 'react';
import { PhoneModel } from './../../models/PhoneModel';
import './styles.scss';

interface PropsPhoneItem {
  phone: PhoneModel;
  onShow?: () => void;
}

export default function PhoneItem({ phone, onShow }: PropsPhoneItem): JSX.Element {
  const imgage = phone.imageFileName;
  return (
    <article className="item-product">
      <header>
        <h4 className="item-product__title">{phone.name}</h4>
        <p>Preprocessor: {phone.processor} </p>
      </header>
      <figure>
        <img
          src={`https://raw.githubusercontent.com/inmax/interview-code-challenges/master/react/phone-catalogue/images/${imgage}`}
        />
      </figure>
      <footer className="item-product__footer">
        <p>{phone.price}€ </p>
      </footer>
    </article>
  );
}
