import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';

const App = ({ state }) => {

  return (
    <div>
      <Header/>
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
