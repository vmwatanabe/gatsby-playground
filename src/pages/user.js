import React, { Component } from 'react';
import { Router, Location } from '@reach/router';

import Layout from '../components/Layout';
import User from '../views/User';

import '../assets/base.scss';

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.renderLocation = this.renderLocation.bind(this);
  }

  renderLocation({ location }) {
    return (
      <Router location={location}>
        <User path="/user/:userId" />
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

export default UserPage;
