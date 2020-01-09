import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../../components/Layout';
import PageLoader from '../../components/PageLoader';
import UsersList from '../../components/UsersList';

import { getUsers } from '../../store/actions/Users.actions';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    const { dispatchGetUsers } = this.props;

    dispatchGetUsers();
  }

  getUsersList() {
    const { loading, users } = this.props;

    if (loading) {
      return null;
    }

    return <UsersList users={users} />;
  }

  render() {
    const { loading } = this.props;

    return (
      <Layout>
        <div className="users">
          {loading && <PageLoader />}
          {this.getUsersList()}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  info: users.info,
  users: users.users,
  loading: users.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchGetUsers: getUsers
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
