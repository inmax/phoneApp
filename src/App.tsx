import React, { Suspense, lazy, useEffect } from 'react';
import PhoneList from './components/PhoneList';
import ContentTop from './components/ContentTop';
import Layout from './components/Layout';
import Spinner from 'react-bootstrap/Spinner';
import { fetchData } from './../src/data/actions/productActions';
import { connect } from 'react-redux';
import get from 'lodash/get';
import './app.scss';

function App({ fetchData, phones }: any): JSX.Element {
  useEffect(() => {
    fetchData();
  }, []);

  return <Layout header={<ContentTop />} content={<PhoneList phones={phones} />} />;
}
const mapStateToProps = (state: any, ownProps: any) => {
  console.log(state, 'desde map props');
  return {
    phones: get(state, 'productState.list'),
  };
};

export default connect(mapStateToProps, { fetchData })(App);
