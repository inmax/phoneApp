import React, { Suspense, lazy, useEffect } from 'react';
import PhoneList from './components/PhoneList';
import ContentTop from './components/ContentTop';
import Layout from './components/Layout';
import Spinner from 'react-bootstrap/Spinner';
import { fetchData } from './../src/data/actions/productActions';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const DetailView = lazy(() => import('./pages/DetailView'));
const Error404 = lazy(() => import('./pages/Error404'));

import './app.scss';

function App(props: { fetchData: any; phones: any; error: any; isLoaded: any }): JSX.Element {
  useEffect(() => {
    props.fetchData();
  }, []);

  if (props.error) {
    return <div>Error</div>;
  } else if (props.phones.length === 0) {
    return <p>No se encontraron resultados</p>;
  } else {
    return (
      <Router>
        <Suspense
          fallback={
            <Spinner animation="grow" role="status" variant="warning">
              <span className="sr-only">Loading...</span>
            </Spinner>
          }
        >
          <Switch>
            <Route exact path="/">
              <Layout header={<ContentTop />} content={<Home {...props} />} />
            </Route>
            <Route path="/initsession">
              <Layout header={<ContentTop />} content={<Error404 />} />
            </Route>
            <Route path="*">
              <Layout header={<ContentTop />} content={<Home {...props} />} />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log(state, 'desde map props');
  return {
    phones: get(state, 'productState.list'),
    error: get(state, 'error'),
    isLoaded: get(state, 'isLoaded'),
  };
};

export default connect(mapStateToProps, { fetchData })(App);
