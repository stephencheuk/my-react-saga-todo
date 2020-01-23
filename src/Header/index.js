import React from 'react';
import { connect } from 'react-redux';

const Header = ({state}) => {

  console.log('Header', state);

  return (
    <h1>{ state.app.Name }</h1>
  );

}

// a map for pass redux store to props
const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Header);
//export default App;
