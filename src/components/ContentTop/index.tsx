import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.scss';

export default function ContentTop(): JSX.Element {
  return (
    <Row className="align-middle">
      <Col xs={12}>
        <h1 className="logo">Phone Catalogue</h1>
      </Col>
    </Row>
  );
}
