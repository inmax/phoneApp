import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PhoneModel } from './../../models/PhoneModel';
import PhoneItem from './../../components/PhoneItem';
import { Link } from 'react-router-dom';

import './styles.scss';

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

  return (
    <div className="view-detail">
      <div className="view-detail__link">
        <Link to="/"> All Phones</Link>
      </div>
      <Row>
        <Col xs={12} md={4} lg={7}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <h4>Features</h4>
          <ul>
            <li>
              <span className="bold">Processor:</span> {item.processor}
            </li>
            <li>
              <span className="bold">Screen: </span>
              {item.screen}
            </li>
            <li>
              <span className="bold">Sanufacturer:</span> {item.sanufacturer}
            </li>
            <li>
              <span className="bold">Ram:</span> {item.ram}
            </li>
            <li>
              <span className="bold">Color:</span> {item.color}
            </li>
          </ul>
        </Col>
        <Col xs={12} md={3} lg={5}>
          <PhoneItem phone={item} />
        </Col>
      </Row>
    </div>
  );
}
