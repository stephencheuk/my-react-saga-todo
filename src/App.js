import React from 'react';
import { connect } from 'react-redux';

const App = ({ state }) => {

  return (
    <div>
      <h1>{ state.root.Name }</h1>
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
