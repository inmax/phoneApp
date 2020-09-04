import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PhoneModel } from './../../models/PhoneModel';
import PhoneItem from './../PhoneItem';

interface PropsPhoneList {
  phones: PhoneModel[];
}

export default function PhoneList({ phones }: PropsPhoneList): JSX.Element {
  return (
    <div className="list-films">
      <Row>
        {phones.map((phone, i) => (
          <Col key={phone.id} xs={6} md={4} lg={3} xl={2}>
            <PhoneItem phone={phone} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
