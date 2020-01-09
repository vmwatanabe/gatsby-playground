import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { getUsers } from '../store/actions/Users.actions';

const IndexPage = ({ info, users, dispatchGetUsers }) => {
  console.log('info', info);
  dispatchGetUsers();

  const usersList = users && users.map(elem => <div>user</div>);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people aee</h1>
      aee {info}
      {usersList}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

const mapStateToProps = ({ users }) => {
  console.log(users);
  return {
    info: users.info,
    users: users.users
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchGetUsers: getUsers
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
