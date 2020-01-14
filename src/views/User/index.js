import React, { Component } from 'react';
import { Router, Location } from '@reach/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Details from './Details';

import Layout from '../../components/Layout';
import PageLoader from '../../components/PageLoader';
const Salve = ({ user }) => <div>{user}</div>;

class User extends Component {
  constructor(props) {
    super(props);

    this.renderLocation = this.renderLocation.bind(this);
  }

  renderLocation({ location }) {
    return (
      <Router location={location}>
        <Salve path="user/" user={1} />
        <Salve path="/user/:user" />
      </Router>
    );
  }

  render() {
    return (
      <Layout>
        <Location>{this.renderLocation}</Location>
      </Layout>
    );
  }
}

export default User;
