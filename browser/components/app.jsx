import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './navbar';

const App = props => (<Navbar company={props.currentCompany} />);

function mapStateToProps(state) {
  return { currentCompany: state.currentCompany.name };
}

export default connect(mapStateToProps, actions)(App);
