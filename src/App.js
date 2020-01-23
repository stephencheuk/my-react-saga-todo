import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';

// import the store which create by index.js
import { store } from './saga-store';

// lazy import with reducer
const LanguageContainer = lazy(() =>
  import('./i18n/reducer').then(module => {
    store.injectReducer('i18n', module.default);
    return import('./i18n/i18nContainer');
  })
);

const App = ({ state }) => {

  return (
    <div>
      <Header/>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={LanguageContainer} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );

}

// a map for pass redux store to props
const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(App);
