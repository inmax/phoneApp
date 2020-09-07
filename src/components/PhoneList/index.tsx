import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PropsPhoneList } from './../../models/PhoneModel';
import PhoneItem from './../PhoneItem';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function PhoneList({ phones }: PropsPhoneList): JSX.Element {
  return (
    <div className="list-product">
      <Row>
        {phones.map((phone, i) => (
          <Col key={phone.id} xs={6} md={4} lg={3}>
            <Link to={phone.id.toString()}>
              <PhoneItem phone={phone} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
