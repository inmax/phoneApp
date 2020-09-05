import React from 'react';
import { PhoneModel } from './../../models/PhoneModel';

interface PropsPhoneItem {
  phone: PhoneModel;
  onShow?: () => void;
}

export default function PhoneItem({ phone, onShow }: PropsPhoneItem): JSX.Element {
  return (
    <article className="item-film">
      <header>
        <h4 className="item-film__title">{phone.name}</h4>
        <h5></h5>
        <p>1997</p>
      </header>
      <figure>{/* img */}</figure>
      <footer className="item-film__footer"></footer>
    </article>
  );
}
