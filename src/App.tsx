import React, { Suspense, lazy, useEffect } from 'react';
import ContentTop from './components/ContentTop';
import Layout from './components/Layout';
import Spinner from 'react-bootstrap/Spinner';
import { fetchData } from './../src/data/actions/productActions';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*Dynamic Imports */
const PhoneList = lazy(() => import('./components/PhoneList'));
const DetailView = lazy(() => import('./pages/DetailView'));
const Error404 = lazy(() => import('./pages/Error404'));
import './app.scss';

function App(props: { fetchData: any; phones: any; error: any; isLoaded: any }): JSX.Element {
  useEffect(() => {
    props.fetchData();
  }, []);
  if (props.error) {
    return <Layout content={<p>Sorry, We have some problem. Try again later</p>} />;
  } else if (props.phones.length === 0) {
    return <Layout content={<p>There are not any result yet</p>} />;
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
          <Layout
            header={<ContentTop />}
            content={
              <Switch>
                <Route exact path="/" render={() => <PhoneList {...props} />} />
                <Route
                  path="/:phone"
                  render={({ match }) => {
                    return <DetailView item={props.phones[match.params.phone]} />;
                  }}
                />
                <Route path="*" exact render={() => Error404} />
              </Switch>
            }
          />
        </Suspense>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    phones: get(state, 'productState.list'),
    error: get(state, 'productState.error'),
    isLoaded: get(state, 'productState.isLoaded'),
  };
};

export default connect(mapStateToProps, { fetchData })(App);
